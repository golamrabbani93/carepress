'use client';
import {useUser} from '@/context/user.provider';
import {ChevronDown, Star, Smile, ImageIcon, Gift, Trash2, SendHorizontal} from 'lucide-react';
import {FieldValues} from 'react-hook-form';
import {toast} from 'sonner';
import {PostProps} from '../Post/Post';
import {useCreateComment} from '@/hooks/comment.hook';
import {Spinner} from '@nextui-org/spinner';
const AddComment = ({post}: PostProps) => {
	const {user} = useUser();
	const {mutate: handleCreateComment, isPending} = useCreateComment();

	const handleSendComment = (e: FieldValues) => {
		e.preventDefault();
		const commentText = e.target.comment.value;
		const commentInput = e.target.comment;

		const commentData = {
			post: post._id,
			author: user?._id,
			content: commentText,
		};

		// !check user is logged in
		if (!user?._id) {
			toast.error('Please login to Comment the post');
		} else {
			handleCreateComment(commentData);
			commentInput.value = '';
		}
	};

	return (
		<div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md space-x-4">
			{/* Profile Picture */}
			<img
				alt="profile"
				className="rounded-full w-10 h-10"
				src={
					user?.profilePicture ||
					'https://res.cloudinary.com/dolttvkme/image/upload/v1727577381/profile_acc17l.webp'
				}
			/>

			{/* Input Area */}
			<div className="flex-grow">
				<form className="relative w-full" onSubmit={(e) => handleSendComment(e)}>
					<input
						className="w-full bg-white p-2 pr-10 rounded-md border border-gray-300 focus:outline-none"
						name="comment"
						placeholder="Comment as Golam Rabbani"
						type="text"
					/>
					<button
						className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary"
						type="submit"
					>
						{isPending ? <Spinner size="sm" color="primary" /> : <SendHorizontal />}
					</button>
				</form>
			</div>

			{/* Icons Section */}
			<div className="flex items-center space-x-2">
				<ChevronDown className="cursor-pointer" />
				<Star className="cursor-pointer" />
				<Smile className="cursor-pointer" />
				<ImageIcon className="cursor-pointer" />
				<Gift className="cursor-pointer" />
				<Trash2 className="cursor-pointer" />
			</div>
		</div>
	);
};

export default AddComment;
