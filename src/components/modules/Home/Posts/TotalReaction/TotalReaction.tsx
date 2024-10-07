import {ThumbsUp, ThumbsDown} from 'lucide-react';
import {PostProps} from '../Post/Post';

const TotalReactionBar = ({post}: PostProps) => {
	return (
		<div className="flex items-center justify-between text-sm mx-3 mb-2">
			{/* Reactions Section */}
			<div className="flex items-center space-x-2">
				{post?.upvotes?.length > 0 && (
					<div className="flex items-center  md:space-x-2">
						{/* Icons */}
						<div className="flex items-center ">
							<ThumbsUp className="w-4 h-4 text-blue-600 mr-1 md:mr-0" />
						</div>
						{/* Likes Text */}
						<span className="text-xs md:text-base">{post?.upvotes?.length} Likes</span>
					</div>
				)}
				{post?.downvotes?.length > 0 && (
					<div className="flex items-center md:space-x-2">
						{/* Icons */}
						<div className="flex items-center mr-1 md:mr-0">
							<ThumbsDown className="w-4 h-4 text-primary" />
						</div>
						{/* Likes Text */}
						<span className="text-xs md:text-base">{post?.downvotes?.length} Dislikes</span>
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
