'use client';

import {IUser} from '@/types';

import React, {useEffect, useState} from 'react';
import SingleUserList from './SingleUserList';
import {DashboardUserLoader} from '@/components/Loader/DashboardUserLoader';

const UsersList = ({users}: any) => {
	const [loading, setloading] = useState(true);

	useEffect(() => {
		if (users.success) {
			setloading(false);
		}
	}, [users]);

	if (loading) {
		return <DashboardUserLoader />;
	}

	return (
		<div className="overflow-x-auto text-center">
			{users?.data?.length > 0 ? (
				<table className="min-w-full  border border-gray-200">
					<thead className="text-center">
						<tr>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold  ">Image</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">Name</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">Email</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">Role</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">Status</th>
							<th className="py-2 px-4 border-b border-gray-200 text-sm font-semibold ">
								User Action
							</th>
						</tr>
					</thead>
					<tbody>
						{users?.data?.map((user: IUser) => <SingleUserList key={user._id} user={user} />)}
					</tbody>
				</table>
			) : (
				<div className="text-center text-primary font-bold">No Users Found</div>
			)}
		</div>
	);
};

export default UsersList;
