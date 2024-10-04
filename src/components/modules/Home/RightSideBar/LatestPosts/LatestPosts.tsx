'use client';

import SidebarTitle from '@/components/UI/SidebarTitle';
import {IPost} from '@/types';
import {Skeleton} from '@nextui-org/skeleton';
import Link from 'next/link';
import React, {useEffect, useState} from 'react';

const LatestPosts = () => {
	const [posts, setPosts] = useState<IPost[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const res = await fetch('http://localhost:5000/api/posts');
				const data = await res.json();

				setLoading(false);
				setPosts(data.data); // Assuming data is the posts array
			} catch (_error) {}
		};

		fetchPosts();
	}, []);

	return (
		<div>
			<SidebarTitle title="Latest Posts" />
			<div className="mt-5">
				{loading
					? [...Array(3)].map((_, index) => (
							<div key={index} className="mb-5 ml-3">
								<Skeleton className="w-full h-20 mb-2 rounded-lg" />
								<Skeleton className="h-6 w-3/4 mb-2 rounded" />
								<Skeleton className="h-4 w-1/2 rounded" />
							</div>
						))
					: posts.map((post) => (
							<div key={post._id} className="mb-5 ml-3">
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

								<p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
							</div>
						))}
			</div>
		</div>
	);
};

export default LatestPosts;
