import {Skeleton} from '@nextui-org/skeleton';
import React from 'react';

export const DashboardUserLoader = () => (
	<div className="text-center">
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white border border-gray-200 ">
				<thead>
					<tr>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-sm font-semibold text-gray-700">
							Image
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100  text-sm font-semibold text-gray-700">
							Name
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100  text-sm font-semibold text-gray-700">
							Email
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100  text-sm font-semibold text-gray-700">
							Role
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100  text-sm font-semibold text-gray-700">
							Role
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100  text-sm font-semibold text-gray-700">
							User Action
						</th>
					</tr>
				</thead>
				<tbody>
					{[...Array(7)].map((_, index) => (
						<tr key={index} className="hover:bg-gray-50 ">
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<Skeleton className="w-10 h-10 bg-gray-300 rounded-full m-auto" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<Skeleton className="w-32 h-5 bg-gray-300 rounded m-auto" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<Skeleton className="w-48 h-5 bg-gray-300 rounded m-auto" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<Skeleton className="w-14 h-5 bg-gray-300 rounded m-auto" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<Skeleton className="w-14 h-5 bg-gray-300 rounded m-auto" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<div className="flex gap-2 justify-center">
									<Skeleton className="w-20 h-8 bg-gray-300 rounded" />
									<Skeleton className="w-20 h-8 bg-gray-300 rounded" />
									<Skeleton className="w-20 h-8 bg-gray-300 rounded" />
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);
