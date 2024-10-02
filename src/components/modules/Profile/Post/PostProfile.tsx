'use client';

import {IPost} from '@/types';
import Post from '../../Home/Posts/Post/Post';
import TotalReactionBar from '../../Home/Posts/TotalReaction/TotalReaction';
import ReactionBar from '../../Home/Posts/ReactionBar/ReactionBar';
import CommentSection from '../../Home/Posts/Comment/Comment';
import AddComment from '../../Home/Posts/Comment/AddComment';
import {useEffect, useState} from 'react';
import PostLoader from '@/components/Loader/PostLoader';

const PostProfile = ({posts}: {posts: any}) => {
	const [loading, setloading] = useState(true);

	useEffect(() => {
		if (posts.success) {
			setloading(false);
		}
	}, [posts]);

	if (loading) {
		return <PostLoader />;
	}

	return (
		<div className="min-h-screen">
			{posts?.data?.map((post: IPost) => {
				return (
					<div
						key={post._id}
						className="shadow-custom-all-around rounded-lg bg-white border border-gray-200 my-3 "
					>
						<Post post={post} />
						<TotalReactionBar post={post} />
						<ReactionBar post={post} />
						<CommentSection post={post} />
						<AddComment post={post} />
					</div>
				);
			})}
		</div>
	);
};

export default PostProfile;
