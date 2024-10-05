// pages/post/[postId].tsx

'use client';

import React, {useEffect, useState} from 'react';
import {IPost} from '@/types';
import {Skeleton} from '@nextui-org/skeleton';
import Post from '@/components/modules/Home/Posts/Post/Post';
import TotalReactionBar from '@/components/modules/Home/Posts/TotalReaction/TotalReaction';
import ReactionBar from '@/components/modules/Home/Posts/ReactionBar/ReactionBar';
import CommentSection from '@/components/modules/Home/Posts/Comment/Comment';
import AddComment from '@/components/modules/Home/Posts/Comment/AddComment';
import Container from '@/components/UI/Container';

const SinglePost = ({data}: {data: IPost}) => {
	const [post, setPosts] = useState<IPost>();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(false);
		setPosts(data); // Assuming data is the posts array
	}, [data]);

	if (loading) {
		return (
			<div className="flex flex-col w-full h-screen p-4">
				<Skeleton className="w-full h-60 mb-5 rounded-lg" />
				<Skeleton className="h-8 w-2/3 mb-3 rounded" />
				<Skeleton className="h-6 w-1/2 mb-3 rounded" />
				<Skeleton className="h-4 w-full mb-2 rounded" />
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
							<Post post={post} />
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
