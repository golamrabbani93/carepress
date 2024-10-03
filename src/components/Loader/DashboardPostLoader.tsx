import {Skeleton} from '@nextui-org/skeleton';
import React from 'react';

export const DashboardPostsLoader = () => (
	<div className="text-center">
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white border border-gray-200 ">
				<thead>
					<tr>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100  font-semibold text-gray-700">
							Post Images
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100   font-semibold text-gray-700">
							Post Title
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100   font-semibold text-gray-700">
							Post Author
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100   font-semibold text-gray-700">
							Status
						</th>

						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100   font-semibold text-gray-700">
							Post Action
						</th>
					</tr>
				</thead>
				<tbody>
					{[...Array(7)].map((_, index) => (
						<tr key={index} className="">
							<td className="py-2 px-4 border-b border-gray-200 ">
								<div className="flex gap-2 justify-center">
									<Skeleton className="w-10 h-10 bg-gray-300 rounded-md" />
									<Skeleton className="w-10 h-10 bg-gray-300 rounded-md" />
									<Skeleton className="w-10 h-10 bg-gray-300 rounded-md" />
								</div>
							</td>
							<td className="py-2 px-4 border-b border-gray-200 ">
								<Skeleton className="w-48 h-5 bg-gray-300 rounded m-auto" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 ">
								<Skeleton className="w-32 h-5 bg-gray-300 rounded m-auto" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 ">
								<Skeleton className="w-14 h-5 bg-gray-300 rounded m-auto" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 ">
								<Skeleton className="w-20 h-8 bg-gray-300 rounded m-auto" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);
