'use client';
import {useUser} from '@/context/user.provider';
import {ChevronDown, Star, Smile, ImageIcon, Gift, Trash2, SendHorizontal} from 'lucide-react';
import {FieldValues} from 'react-hook-form';
import {PostProps} from '../Post/SinglePostData';
import {useCreateComment} from '@/hooks/comment.hook';
import {Spinner} from '@nextui-org/spinner';
import {useRouter} from 'next/navigation';

const AddComment = ({post}: PostProps) => {
	const {user} = useUser();
	const {mutate: handleCreateComment, isPending} = useCreateComment();
	const router = useRouter();
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
			router.push('/login');
		} else {
			handleCreateComment(commentData);
			commentInput.value = '';
		}
	};

	return (
		<div className="flex items-center px-4 pb-3  rounded-lg shadow-md space-x-4">
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
				<form className="relative w-full customText" onSubmit={(e) => handleSendComment(e)}>
					<input
						required
						className="w-full  p-2 pr-10 rounded-md border border-gray-300 focus:outline-none"
						name="comment"
						placeholder={`Comment as ${user?.name || 'Guest...'}`}
						type="text"
					/>
					<button
						className="absolute right-2 top-1/2 transform -translate-y-1/2  bg-primary w-8 h-8 rounded-full text-white flex items-center justify-center"
						type="submit"
					>
						{isPending ? (
							<Spinner color="white" size="sm" />
						) : (
							<SendHorizontal className="w-[20px]" />
						)}
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
