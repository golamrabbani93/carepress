'use client';

import {IPost} from '@/types';
import Post from '../../Home/Posts/Post/Post';
import TotalReactionBar from '../../Home/Posts/TotalReaction/TotalReaction';
import ReactionBar from '../../Home/Posts/ReactionBar/ReactionBar';
import CommentSection from '../../Home/Posts/Comment/Comment';
import AddComment from '../../Home/Posts/Comment/AddComment';
import {useEffect, useState} from 'react';
import PostLoader from '@/components/Loader/PostLoader';
import {useUser} from '@/context/user.provider';
import PremiumPost from '@/components/PremiumPost/PremiumPost';

const PostProfile = ({posts, query}: {posts: any; query?: any}) => {
	const {user} = useUser();
	const [post, setPost] = useState<IPost[]>([]);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (
			query?.sort ||
			query?.category ||
			query?.searchTerm ||
			query?.page > 0 ||
			query?.limit > 0
		) {
			setPost([]);
			if (posts !== undefined && posts.success) {
				const newPosts = posts.data || [];

				setPost((prev: IPost[]) => [
					...prev,
					...newPosts.filter(
						(newPost: IPost) => !prev.some((prevPost: IPost) => prevPost._id === newPost._id),
					),
				]); // Ensure you're using the correct data property
				setLoading(false);
			} else {
				setPost(posts.data);
			}
		}
	}, [query, query?.sort, query?.category, query?.searchTerm, posts]);

	// useEffect(() => {
	// 	if (posts !== undefined && posts.success) {
	// 		const newPosts = posts.data || [];

	// 		setPost((prev: IPost[]) => [
	// 			...newPosts,
	// 			...post.filter(
	// 				(newPost: IPost) => !prev.some((prevPost: IPost) => prevPost._id === newPost._id),
	// 			),
	// 		]); // Ensure you're using the correct data property
	// 		setloading(false);
	// 	}
	// }, [posts]);

	// useEffect(() => {
	// 	// Clear the posts only if page and limit are not provided
	// 	if (query?.sort || query?.category || query?.searchTerm) {
	// 		setPost([]);
	// 		setLoading(true);
	// 	}
	// }, [query]);

	// Handle posts updates and filter out duplicates
	useEffect(() => {
		if (posts !== undefined && posts.success) {
			const newPosts = posts.data || [];

			setPost((prevPosts: IPost[]) => {
				// Filter out the new posts that already exist in the previous posts
				const filteredNewPosts = newPosts.filter(
					(newPost: IPost) => !prevPosts.some((prevPost: IPost) => prevPost._id === newPost._id),
				);

				// Return combined posts without duplicates
				return [...prevPosts, ...filteredNewPosts];
			});

			setLoading(false);
		}
	}, [posts]);

	if (!posts.data) {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}

	return (
		<div className="min-h-screen">
			{loading ? (
				[...Array(2)].map((_, index) => <PostLoader key={index} />)
			) : post?.length > 0 ? (
				post?.map((post: IPost) =>
					post?.isPremium && user?.status === 'basic' ? (
						<PremiumPost key={post._id} post={post} />
					) : (
						<div
							key={post._id}
							className="shadow-custom-all-around rounded-lg border border-gray-100 my-3 "
						>
							<Post post={post} />
							<TotalReactionBar post={post} />
							<ReactionBar post={post} />
							<CommentSection post={post} />
							<AddComment post={post} />
						</div>
					),
				)
			) : (
				<div className="text-center text-primary font-bold">No Post Available</div>
			)}
		</div>
	);
};

export default PostProfile;
