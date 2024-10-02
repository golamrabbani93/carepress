import {ThumbsUp, Heart, ThumbsDown} from 'lucide-react';
import {PostProps} from '../Post/Post';

const TotalReactionBar = ({post}: PostProps) => {
	return (
		<div className="flex items-center justify-between text-sm text-gray-700 mx-3 mb-2">
			{/* Reactions Section */}
			<div className="flex items-center space-x-2">
				{post?.upvotes?.length > 0 && (
					<div className="flex items-center space-x-2">
						{/* Icons */}
						<div className="flex items-center space-x-1">
							<ThumbsUp className="w-4 h-4 text-blue-600" />
						</div>
						{/* Likes Text */}
						<span>{post?.upvotes?.length} Likes</span>
					</div>
				)}
				{post?.downvotes?.length > 0 && (
					<div className="flex items-center space-x-2">
						{/* Icons */}
						<div className="flex items-center space-x-1">
							<ThumbsDown className="w-4 h-4 text-primary" />
						</div>
						{/* Likes Text */}
						<span>{post?.downvotes?.length} Dislikes</span>
					</div>
				)}
			</div>

			{/* Comments Section */}
			{post.comments.length > 0 && (
				<div>
					<span>{post?.comments?.length} comments</span>
				</div>
			)}
		</div>
	);
};

export default TotalReactionBar;
