'use client';
import {ThumbsUp, MessageCircle, ThumbsDown} from 'lucide-react';
import {PostProps} from '../Post/Post';
import {useCreateUpvote} from '@/hooks/post.hook';
import {useUser} from '@/context/user.provider';
import {toast} from 'sonner';
import {useState} from 'react';
import {Button} from '@nextui-org/button';

const ReactionBar: React.FC<PostProps> = ({post}) => {
	const {mutate: handleUpdate} = useCreateUpvote();
	const {user} = useUser();
	const [shake, setShake] = useState(false);

	// Handle Like Button
	const handleLike = () => {
		setShake(true);
		if (!user?._id) {
			toast.error('Please login to like the post');
		} else {
			handleUpdate(post._id);
		}
		setTimeout(() => {
			setShake(false);
		}, 1500);
	};
	//* check that i am like or not

	const isLikedPost = post?.upvotes?.find((upvote) => upvote._id === user?._id);
	const isLike = isLikedPost ? true : false;

	return (
		<div className="flex justify-between px-4 py-2 border-t border-b border-gray-200">
			{/* Like Button */}
			<button
				onClick={() => handleLike()}
				className={`flex items-center space-x-2 text-gray-500 hover:text-primary ${isLike && 'text-primary'} ${shake && 'animate-shake'}`}
			>
				<ThumbsUp className="w-5 h-5" />
				<span>Like</span>
			</button>

			{/* Share Button */}
			<button className="flex items-center space-x-2 text-gray-500 hover:text-primary">
				<ThumbsDown className="w-5 h-5" />
				<span>Share</span>
			</button>

			{/* Comment Button */}
			<button className="flex items-center space-x-2 text-gray-500 hover:text-primary">
				<MessageCircle className="w-5 h-5" />
				<span>Comment</span>
			</button>
		</div>
	);
};

export default ReactionBar;
