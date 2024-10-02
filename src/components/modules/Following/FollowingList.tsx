'use client';
import {TableLoader} from '@/components/Loader/TableLoader';

import {IUser} from '@/types';

import React, {useEffect, useState} from 'react';
import SingleFollowingList from './SingleFollowing';

const FollowingList = ({users}: any) => {
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
			{followingUsers?.length > 0 ? (
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
							<SingleFollowingList key={user._id} user={user} />
						))}
					</tbody>
				</table>
			) : (
				<div className="text-center text-gray-400">No Following Users</div>
			)}
		</div>
	);
};

export default FollowingList;