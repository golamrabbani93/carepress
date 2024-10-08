'use client';

import {IPost} from '@/types';

import React, {useEffect, useState} from 'react';

import SinglePostList from './SinglePostsList';
import {DashboardPostsLoader} from '@/components/Loader/DashboardPostLoader';
const PostsLists = ({posts}: any) => {
	const [loading, setloading] = useState(true);

	useEffect(() => {
		if (posts.success) {
			setloading(false);
		}
	}, [posts]);

	if (loading) {
		return <DashboardPostsLoader />;
	}

	return (
		<div className="overflow-x-auto text-center">
			{posts?.data?.length > 0 ? (
				<table className="min-w-full  border border-gray-200">
					<thead className="text-center">
						<tr>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold  ">
								Post Images
							</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">
								Post Title
							</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">
								Post Author
							</th>

							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">Status</th>
							<th className="py-2 px-4 border-b border-gray-200 text-sm font-semibold ">
								Post Action
							</th>
						</tr>
					</thead>
					<tbody>
						{posts?.data?.map((post: IPost) => <SinglePostList key={post._id} post={post} />)}
					</tbody>
				</table>
			) : (
				<div className="text-center text-primary font-bold">No Posts Found</div>
			)}
		</div>
	);
};

export default PostsLists;
