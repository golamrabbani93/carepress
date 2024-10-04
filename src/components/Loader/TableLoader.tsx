import React from 'react';

export const TableLoader = () => (
	<div className="animate-pulse">
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white border border-gray-200">
				<thead>
					<tr>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
							Image
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
							Name
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
							Email
						</th>
						<th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
							Status
						</th>
					</tr>
				</thead>
				<tbody>
					{[...Array(7)].map((_, index) => (
						<tr key={index} className="hover:bg-gray-50">
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<div className="w-10 h-10 bg-gray-300 rounded-full" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<div className="w-32 h-5 bg-gray-300 rounded" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<div className="w-48 h-5 bg-gray-300 rounded" />
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm">
								<div className="w-20 h-8 bg-gray-300 rounded" />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</div>
);
