/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import SidebarTitle from '@/components/UI/SidebarTitle';
import {useUser} from '@/context/user.provider';
import {IPost} from '@/types';
import {Skeleton} from '@nextui-org/skeleton';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';

const LatestPosts = ({data}: any) => {
	const {user} = useUser();
	// const userId = user ? (user as IUser) || '' : '';

	const latestPost: IPost[] = data.data;
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (data.success && user) {
			setLoading(false);
		} else {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	}, [data, user]);

	return (
		<div>
			<SidebarTitle title="Latest Posts" />
			<div className="mt-5">
				{loading
					? [...Array(5)].map((_, index) => (
							<div key={index} className="mb-5 ml-3">
								<Skeleton className="w-full h-20 mb-2 rounded-lg" />
								<Skeleton className="h-6 w-3/4 mb-2 rounded" />
								<Skeleton className="h-4 w-1/2 rounded" />
							</div>
						))
					: latestPost.map(
							(post) =>
								post.status && (
									<div key={post._id} className="relative">
										<div className="mb-5 ml-3">
											<Link href={`/post/${post._id}`}>
												<img
													alt={post.title}
													className="w-full h-20 object-cover rounded-lg mb-2"
													src={post.images[0]}
												/>
											</Link>
											<Link
												className="text-lg font-bold  uppercase hover:text-primary cursor-pointer transition-all duration-250"
												href={`/post/${post._id}`}
											>
												{post.title}
											</Link>

											<p className="text-sm text-gray-500">
												{new Date(post.createdAt).toLocaleString()}
											</p>
										</div>
										<div
											className={`${post.isPremium && user?.status !== 'premium' ? 'absolute' : 'hidden'} inset-0 bg-black bg-opacity-10 backdrop-blur-md z-10 flex items-center justify-center rounded-md`}
										>
											<p className="font-extrabold">This is a Pemium Content </p>
										</div>
									</div>
								),
						)}
			</div>
		</div>
	);
};

export default LatestPosts;
