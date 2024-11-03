'use client';
import {ThumbsUp, ThumbsDown} from 'lucide-react';
import {PostProps} from '../Post/Post';
import {useUser} from '@/context/user.provider';
import {useState} from 'react';
import {useCreateDownVote, useCreateUpVote} from '@/hooks/post.hook';
import {useRouter} from 'next/navigation';
import CommentsModal from '@/components/modal/CommentsModal';

const ReactionBar: React.FC<PostProps> = ({post}) => {
	const {mutate: handleUpVoteUpdate} = useCreateUpVote();
	const {mutate: handleDownVoteUpdate} = useCreateDownVote();
	const {user} = useUser();
	const [LikeShake, setLikeShake] = useState(false);
	const [disLikeShake, setDisLikeShake] = useState(false);
	const router = useRouter();
	// Handle Like Button
	const handleLike = () => {
		setLikeShake(true);
		if (!user?._id) {
			router.push('/login');
		} else {
			handleUpVoteUpdate(post._id);
		}
		setTimeout(() => {
			setLikeShake(false);
		}, 1500);
	};

	const handleDisLike = () => {
		setDisLikeShake(true);
		if (!user?._id) {
			router.push('/login');
		} else {
			handleDownVoteUpdate(post._id);
		}
		setTimeout(() => {
			setDisLikeShake(false);
		}, 1500);
	};
	//* check that i am like or not
	const isLikedPost = post?.upvotes?.find((upvote) => upvote._id === user?._id);
	const isLike = isLikedPost ? true : false;

	// * check that i am dislike or not
	const isDisLikedPost = post?.downvotes?.find((downvote) => downvote._id === user?._id);
	const isDisLike = isDisLikedPost ? true : false;

	return (
		<div className="flex justify-between px-4 py-2 border-t border-b border-gray-200">
			{/* Like Button */}
			<button
				className={`flex items-center space-x-2 text-gray-500 hover:text-primary ${isLike && 'text-primary'} ${LikeShake && 'animate-shake'}`}
				onClick={() => handleLike()}
			>
				<ThumbsUp className="w-4 h-4 md:w-5 md:h-5" />
				<span className="text-sm md:text-base">Like</span>
			</button>

			{/* Dislike Button */}
			<button
				className={`flex items-center space-x-2 text-gray-500 hover:text-primary ${isDisLike && 'text-primary'} ${disLikeShake && 'animate-shake'}`}
				onClick={handleDisLike}
			>
				<ThumbsDown className="w-4 h-4 md:w-5 md:h-5" />
				<span className="text-sm md:text-base">Dislike</span>
			</button>

			{/* Comments Modal */}
			<CommentsModal post={post} />
		</div>
	);
};

export default ReactionBar;
