'use client';

import {IPost} from '@/types';
import Post from '../../Home/Posts/Post/Post';
import TotalReactionBar from '../../Home/Posts/TotalReaction/TotalReaction';
import ReactionBar from '../../Home/Posts/ReactionBar/ReactionBar';
import CommentSection from '../../Home/Posts/Comment/Comment';
import AddComment from '../../Home/Posts/Comment/AddComment';
import {useEffect, useState} from 'react';
import PostLoader from '@/components/Loader/PostLoader';

const AllPosts = ({posts}: {posts: any}) => {
	const [loading, setloading] = useState(true);

	useEffect(() => {
		if (posts.success) {
			setloading(false);
		}
	}, [posts]);

	if (!posts.data) {
		setTimeout(() => {
			setloading(false);
		}, 1500);
	}

	return (
		<div className="min-h-screen">
			{loading ? (
				[...Array(3)].map((_, index) => <PostLoader key={index} />)
			) : posts?.data?.length > 0 ? (
				posts?.data?.map((post: IPost) => {
					return (
						<div
							key={post._id}
							className="shadow-custom-all-around rounded-lg  border border-gray-200 my-3 "
						>
							<Post post={post} />
							<TotalReactionBar post={post} />
							<ReactionBar post={post} />
							<CommentSection post={post} />
							<AddComment post={post} />
						</div>
					);
				})
			) : (
				<div className="text-center text-primary font-bold">No Post Available</div>
			)}
		</div>
	);
};

export default AllPosts;
