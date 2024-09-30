import {Skeleton} from '@nextui-org/skeleton';

const PostLoader = () => {
	return (
		<div className="p-4 bg-white rounded-lg shadow-custom-all-around space-y-4">
			{/* Profile Section */}
			<div className="flex items-center space-x-4">
				<Skeleton className="w-10 h-10 rounded-full" /> {/* Profile picture */}
				<div>
					<Skeleton className="w-24 h-4 rounded-md mb-2" /> {/* Name */}
					<Skeleton className="w-16 h-3 rounded-md" /> {/* Time */}
				</div>
			</div>
			{/* Post Content */}
			<div className="space-y-2">
				<Skeleton className="w-3/4 h-5 rounded-md" /> {/* Title */}
				<Skeleton className="w-full h-4 rounded-md" /> {/* Description line 1 */}
				<Skeleton className="w-full h-4 rounded-md" /> {/* Description line 2 */}
				<Skeleton className="w-1/2 h-4 rounded-md" /> {/* Description line 3 */}
			</div>
			{/* Post Image */}
			<Skeleton className="w-full h-48 rounded-lg" /> {/* Placeholder for post image */}
			{/* Interaction Buttons */}
			<div className="flex justify-between items-center">
				<Skeleton className="w-10 h-4 rounded-md" /> {/* Like */}
				<Skeleton className="w-10 h-4 rounded-md" /> {/* Comment */}
				<Skeleton className="w-10 h-4 rounded-md" /> {/* Share */}
			</div>
			<div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md space-x-4">
				{/* Profile Picture Skeleton */}
				<Skeleton className="w-10 h-10 rounded-full" />

				{/* Input Area Skeleton */}
				<div className="flex-grow">
					<Skeleton className="w-full h-8 rounded-md" />
				</div>

				{/* Icons Skeleton */}
				<div className="flex items-center space-x-2">
					<Skeleton className="w-6 h-6 rounded-md" />
					<Skeleton className="w-6 h-6 rounded-md" />
					<Skeleton className="w-6 h-6 rounded-md" />
					<Skeleton className="w-6 h-6 rounded-md" />
					<Skeleton className="w-6 h-6 rounded-md" />
				</div>
			</div>
		</div>
	);
};

export default PostLoader;
