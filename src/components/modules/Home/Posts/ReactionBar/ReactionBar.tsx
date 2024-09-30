import React from 'react';
import {ThumbsUp, MessageCircle, Share2} from 'lucide-react';
import {PostProps} from '../Post/Post';

const ReactionBar: React.FC<PostProps> = ({post}) => {
	return (
		<div className="flex justify-between px-4 py-2 border-t border-b border-gray-200">
			{/* Like Button */}
			<button className="flex items-center space-x-2 text-gray-500 hover:text-primary">
				<ThumbsUp className="w-5 h-5" />
				<span>Like</span>
			</button>

			{/* Comment Button */}
			<button className="flex items-center space-x-2 text-gray-500 hover:text-primary">
				<MessageCircle className="w-5 h-5" />
				<span>Comment</span>
			</button>

			{/* Share Button */}
			<button className="flex items-center space-x-2 text-gray-500 hover:text-primary">
				<Share2 className="w-5 h-5" />
				<span>Share</span>
			</button>
		</div>
	);
};

export default ReactionBar;
