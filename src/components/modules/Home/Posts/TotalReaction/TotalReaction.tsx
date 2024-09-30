import {ThumbsUp, Heart} from 'lucide-react';

const TotalReactionBar = () => {
	return (
		<div className="flex items-center justify-between text-sm text-gray-700 mx-3 mb-2">
			{/* Reactions Section */}
			<div className="flex items-center space-x-2">
				{/* Icons */}
				<div className="flex items-center space-x-1">
					<ThumbsUp className="w-4 h-4 text-blue-500" />
					<Heart className="w-4 h-4 text-red-500" />
				</div>
				{/* Likes Text */}
				<span>
					{/* {userNames.slice(0, 2).join(', ')} and {likes} others */}
					likers
				</span>
			</div>

			{/* Comments Section */}
			<div>
				<span> comments</span>
			</div>
		</div>
	);
};

export default TotalReactionBar;
