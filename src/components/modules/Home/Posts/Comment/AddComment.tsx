'use client';
import {useUser} from '@/context/user.provider';
import {ChevronDown, Star, Smile, ImageIcon, Gift, Trash2} from 'lucide-react';

const AddComment = () => {
	const {user} = useUser();

	return (
		<div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md space-x-4">
			{/* Profile Picture */}
			<img
				src={
					user?.profilePicture ||
					'https://res.cloudinary.com/dolttvkme/image/upload/v1727577381/profile_acc17l.webp'
				}
				alt="profile"
				className="rounded-full w-10 h-10"
			/>

			{/* Input Area */}
			<div className="flex-grow">
				<input
					type="text"
					placeholder="Comment as Golam Rabbani"
					className="w-full bg-white p-2 rounded-md border border-gray-300 focus:outline-none"
				/>
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
