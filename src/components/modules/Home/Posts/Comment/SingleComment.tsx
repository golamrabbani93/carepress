'use client';
import {useUser} from '@/context/user.provider';
import {useUpadateComment} from '@/hooks/comment.hook';
import {IComment} from '@/types';
import {Textarea} from '@nextui-org/input';
import {EllipsisVertical, SendHorizontal} from 'lucide-react';
import {useEffect, useState} from 'react';
import {toast} from 'sonner';
import {Spinner} from '@nextui-org/spinner';
import DeleteCommentModal from './DeleteCommentModal';
interface CommentProps {
	comment: IComment;
}

const SingleComment = ({comment}: CommentProps) => {
	const {user} = useUser();
	const [showOptions, setShowOptions] = useState(false);
	const [edit, setEdit] = useState(false);

	const {mutate: handleUpdateComment, isPending, data} = useUpadateComment();

	const handleToggleOptions = () => {
		setShowOptions(!showOptions); // Toggle dropdown visibility
	};
	const handleEditComment = (e: any) => {
		e.preventDefault();
		const commentText = e.target.comment.value;
		const commentInput = e.target.comment;

		const updatedComment = {
			_id: comment._id,
			content: commentText,
		};

		// !check user is logged in
		if (!user?._id) {
			toast.error('Please login to Comment the post');
		} else {
			handleUpdateComment(updatedComment);

			commentInput.value = '';
		}
	};

	useEffect(() => {
		if (data && data.success) {
			setEdit(false);
		}
	}, [data]);

	return (
		<div className="flex items-start mb-4">
			<img
				alt="Profile"
				className="w-10 h-10 rounded-full mr-3"
				src={comment.author.profilePicture}
			/>
			<div className="flex items-center justify-center">
				<div className="bg-gray-100 p-2 rounded-lg w-[220px] ]">
					<div className="flex justify-between">
						<h3 className="font-semibold">{comment.author.name}</h3>
						<span className="text-xs text-gray-400 ml-2">time</span>
					</div>
					<div>
						{edit ? (
							<>
								<form className="relative w-full" onSubmit={(e) => handleEditComment(e)}>
									<Textarea
										className="max-w-xs "
										defaultValue={comment.content}
										name="comment"
										variant="faded"
									/>
									<button
										className="absolute right-2 -bottom-[13px] transform -translate-y-1/2 bg-primary w-8 h-8 rounded-full text-white flex items-center justify-center"
										type="submit"
									>
										{isPending ? (
											<Spinner color="primary" size="sm" />
										) : (
											<SendHorizontal className="w-[20px]" />
										)}
									</button>
								</form>
								<button
									onClick={() => setEdit(false)}
									className="text-xs text-primary uppercase font-semibold"
								>
									{' '}
									cencel
								</button>
							</>
						) : (
							<p>{comment.content}</p>
						)}
					</div>
				</div>
				<div className="relative inline-block text-left">
					<button className="ml-2 cursor-pointer" onClick={handleToggleOptions}>
						<EllipsisVertical />
					</button>

					{showOptions && (
						<div className="absolute -top-[6px] right-[35px] mt-2 w-32 bg-white rounded-md shadow-custom-all-around ring-1 ring-black ring-opacity-5 z-10">
							<div className="py-1">
								<button
									className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
									onClick={() => {
										setEdit(true);
										setShowOptions(false);
									}}
								>
									Edit
								</button>
								<DeleteCommentModal comment={comment} setShowOptions={setShowOptions} />
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SingleComment;
