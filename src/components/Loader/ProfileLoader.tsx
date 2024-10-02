import {Skeleton} from '@nextui-org/skeleton';

const ProfileLoader = () => {
	return (
		<div className="bg-gray-100">
			{/* Cover Photo Skeleton */}
			<div className="relative h-60 bg-gray-300 animate-pulse">
				<Skeleton className="h-full w-full" />
			</div>

			{/* Profile picture and details skeleton */}
			<div className="relative -mt-16 flex justify-between px-8">
				<div className="flex items-end space-x-4">
					{/* Profile picture skeleton */}
					<Skeleton className="w-36 h-36 rounded-full border-4 border-white" />

					{/* User details skeleton */}
					<div>
						<Skeleton className="h-6 w-32 mb-2" />
						<Skeleton className="h-4 w-24" />
					</div>
				</div>

				{/* Edit profile button skeleton */}
				<Skeleton className="w-28 h-10 rounded" />
			</div>

			{/* Navigation Tabs Skeleton */}
			<div className="mt-6 border-b border-gray-300">
				<div className="max-w-4xl mx-auto px-4 flex space-x-8">
					<Skeleton className="h-4 w-12" />
					<Skeleton className="h-4 w-16" />
				</div>
			</div>
		</div>
	);
};

export default ProfileLoader;
