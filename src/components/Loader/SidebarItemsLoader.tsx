import {Skeleton} from '@nextui-org/skeleton';

const SidebarItemsLoader = () => {
	return (
		<div>
			<ul className="space-y-4 pt-10">
				{/* Render skeletons while loading */}
				{Array.from({length: 5}).map((_, index) => (
					<li key={index}>
						<div className="flex items-center p-3 rounded-lg text-lg">
							<span className="mr-4">
								{/* Icon skeleton */}
								<Skeleton className="w-8 h-8 rounded" />
							</span>
							{/* Text skeleton */}
							<Skeleton className="h-8 w-28 rounded" />
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SidebarItemsLoader;
