'use client';
import {TableLoader} from '@/components/Loader/TableLoader';

import {IUser} from '@/types';

import React, {useEffect, useState} from 'react';

import SingleFollowerList from './SingleFollowerList';
const FollowerList = ({users}: any) => {
	const [loading, setloading] = useState(true);

	const followersUsers = users?.data?.followers;

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
			{followersUsers?.length > 0 ? (
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
						{followersUsers.map((user: IUser) => (
							<SingleFollowerList key={user._id} user={user} />
						))}
					</tbody>
				</table>
			) : (
				<div className="text-center text-primary font-bold">No Follower Available</div>
			)}
		</div>
	);
};

export default FollowerList;
