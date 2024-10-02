'use client';
import {TableLoader} from '@/components/Loader/TableLoader';
import {IUser} from '@/types';
import {Avatar} from '@nextui-org/avatar';
import {Button} from '@nextui-org/button';
import React, {useEffect, useState} from 'react';

const FollowerList = ({users}: any) => {
	const [loading, setloading] = useState(true);

	const followingUsers = users?.data?.following;

	useEffect(() => {
		if (users.success) {
			setloading(false);
		}
	}, [users]);

	if (loading) {
		return <TableLoader />;
	}

	return (
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
					{followingUsers.map((user: IUser) => (
						<tr key={user._id} className="hover:bg-gray-50">
							<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
								<div className="w-10 h-10 rounded  overflow-hidden">
									<Avatar
										className="w-full h-full object-cover"
										size="sm"
										src={user?.profilePicture}
									/>
								</div>
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
								{user.name}
							</td>
							<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
								{user.email}
							</td>

							<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900 capitalize">
								<Button size="sm" color="primary" variant="bordered">
									Unfollow
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default FollowerList;
