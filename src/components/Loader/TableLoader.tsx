import React from 'react';

interface IUser {
	_id: string;
	name: string;
	email: string;
	profilePicture: string;
}

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

// const UserTable: React.FC = () => {
// 	const [followingUsers, setFollowingUsers] = useState<IUser[]>([]);
// 	const [loading, setLoading] = useState(true);

// 	// Simulate data fetch
// 	useEffect(() => {
// 		setTimeout(() => {
// 			setFollowingUsers([
// 				{
// 					_id: '1',
// 					name: 'Tony Reichert',
// 					email: 'tony@example.com',
// 					profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
// 				},
// 				{
// 					_id: '2',
// 					name: 'Zoey Lang',
// 					email: 'zoey@example.com',
// 					profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
// 				},
// 				{
// 					_id: '3',
// 					name: 'Jane Fisher',
// 					email: 'jane@example.com',
// 					profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg',
// 				},
// 				{
// 					_id: '4',
// 					name: 'William Howard',
// 					email: 'william@example.com',
// 					profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
// 				},
// 			]);
// 			setLoading(false);
// 		}, 2000); // 2 seconds delay to simulate loading
// 	}, []);

// 	if (loading) {
// 		return <SkeletonLoader />;
// 	}

// 	return (
// 		<div>
// 			{[0, 2, 3, 4].map((_, index) => (
// 				<tr key={index} className="hover:bg-gray-50">
// 					<td className="py-2 px-4 border-b border-gray-200">
// 						<Skeleton className="w-10 h-10 rounded-full animate-pulse" />
// 					</td>
// 					<td className="py-2 px-4 border-b border-gray-200">
// 						<Skeleton className="h-6 w-32 rounded animate-pulse" />
// 					</td>
// 					<td className="py-2 px-4 border-b border-gray-200">
// 						<Skeleton className="h-6 w-40 rounded animate-pulse" />
// 					</td>
// 					<td className="py-2 px-4 border-b border-gray-200">
// 						<Skeleton className="h-6 w-24 rounded animate-pulse" />
// 					</td>
// 				</tr>
// 			))}
// 		</div>
// 	);
// };

// export default UserTable;
