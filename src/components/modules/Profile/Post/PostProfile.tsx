'use client';

import {IPost} from '@/types';
import Post from '../../Home/Posts/Post/Post';
import TotalReactionBar from '../../Home/Posts/TotalReaction/TotalReaction';
import ReactionBar from '../../Home/Posts/ReactionBar/ReactionBar';
import CommentSection from '../../Home/Posts/Comment/Comment';
import AddComment from '../../Home/Posts/Comment/AddComment';
import {useEffect, useState} from 'react';
import PostLoader from '@/components/Loader/PostLoader';
import PostModal from '@/components/modal/PostModal';

const PostProfile = ({posts}: {posts: any}) => {
	const [loading, setloading] = useState(true);

	useEffect(() => {
		if (posts.success) {
			setloading(false);
		}
	}, [posts]);

	return (
		<div className="min-h-screen">
			<PostModal />
			{loading
				? [...Array(5)].map((_, index) => <PostLoader key={index} />)
				: posts?.data?.map((post: IPost) => {
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
