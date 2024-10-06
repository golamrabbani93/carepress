// pages/post/[postId].tsx

'use client';

import React, {useEffect, useState} from 'react';
import {IPost} from '@/types';
import {Skeleton} from '@nextui-org/skeleton';

import TotalReactionBar from '@/components/modules/Home/Posts/TotalReaction/TotalReaction';
import ReactionBar from '@/components/modules/Home/Posts/ReactionBar/ReactionBar';
import CommentSection from '@/components/modules/Home/Posts/Comment/Comment';
import AddComment from '@/components/modules/Home/Posts/Comment/AddComment';
import Container from '@/components/UI/Container';
import SinglePostData from './Post/SinglePostData';

const SinglePost = ({data}: {data: IPost}) => {
	const [post, setPosts] = useState<IPost>();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
		setPosts(data); // Assuming data is the posts array
	}, [data]);

	if (loading) {
		return (
			// <div className="flex flex-col w-full min-h-screen p-6  mt-9">
			// 	<div className="my-4 p-4 mt-4 border  rounded-lg shadow-lg animate-pulse">
			// 		{/* Avatar and Name Skeleton */}
			// 		<div className="flex items-center mb-4">
			// 			<Skeleton className="h-12 w-12 rounded-full bg-gray-200" />
			// 			<div className="ml-4">
			// 				<Skeleton className="h-4 w-1/3 bg-gray-200" />
			// 				<Skeleton className="h-3 w-1/4 mt-2 bg-gray-200" />
			// 			</div>
			// 		</div>

			// 		{/* Title Skeleton */}
			// 		<Skeleton className="h-6 w-2/3 mb-4 bg-gray-200" />

			// 		{/* Highlighted Text Skeleton */}
			// 		<Skeleton className="h-4 w-1/4 mb-2 bg-gray-200" />
			// 		<Skeleton className="h-4 w-full mb-2 bg-gray-200" />
			// 		<Skeleton className="h-4 w-3/4 mb-4 bg-gray-200" />

			// 		{/* Image Skeleton */}
			// 		<Skeleton className="h-40 w-full rounded-lg bg-gray-200" />
			// 		<Skeleton className="h-8 w-2/3 mb-3 rounded" />
			// 		<Skeleton className="h-6 w-1/2 mb-3 rounded" />
			// 		<Skeleton className="h-4 w-full mb-2 rounded" />
			// 	</div>
			// 	{/* <Skeleton className="w-full h-60 mb-5 rounded-lg" /> */}
			// </div>
			<div className="pt-16 px-6 mx-auto my-5 min-h-screen">
				{/* Post Status Skeleton */}
				<Skeleton className="h-12 w-full mb-4 bg-red-100" />

				{/* Header with Profile Picture and Name */}
				<div className="flex justify-between mb-4">
					<div className="flex items-center mb-4">
						{/* Profile Picture */}
						<Skeleton className="rounded-full h-10 w-10 mr-4 bg-gray-200" />

						{/* Name and Follow Button */}
						<div>
							<Skeleton className="h-4 w-24 bg-gray-200 mb-2" />
							<Skeleton className="h-3 w-16 bg-gray-200" />
						</div>
					</div>

					{/* Options (three-dot menu) */}
					<Skeleton className="h-6 w-6 bg-gray-200" />
				</div>

				{/* Title */}
				<Skeleton className="h-6 w-1/2 mb-3 bg-gray-200" />

				{/* Content Skeleton */}
				<div>
					<Skeleton className="h-4 w-full mb-2 bg-gray-200" />
					<Skeleton className="h-4 w-5/6 mb-2 bg-gray-200" />
					<Skeleton className="h-4 w-4/6 mb-2 bg-gray-200" />
				</div>

				{/* Image Gallery Skeleton */}
				<div className="grid grid-cols-3 gap-2 mt-4">
					<Skeleton className="h-28 w-full bg-gray-200 rounded-md" />
					<Skeleton className="h-28 w-full bg-gray-200 rounded-md" />
					<Skeleton className="h-28 w-full bg-gray-200 rounded-md" />
				</div>
			</div>
		);
	}

	return (
		<Container>
			<div>
				{post?._id ? (
					<div className="min-h-screen">
						<div
							key={post._id}
							className={`shadow-custom-all-around rounded-lg  border border-gray-100 my-3 ${!post.status && 'hidden'}`}
						>
							<SinglePostData post={post} />
							<TotalReactionBar post={post} />
							<ReactionBar post={post} />
							<CommentSection post={post} />
							<AddComment post={post} />
						</div>
					</div>
				) : (
					<div className="flex justify-center mt-10 h-screen">
						<h1 className="text-2xl text-primary font-bold uppercase">! oops No Posts Found</h1>
					</div>
				)}
			</div>
		</Container>
	);
};

export default SinglePost;
