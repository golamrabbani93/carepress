'use client';

import {getAllPosts} from '@/services/Post/post.service';
import {Spinner} from '@nextui-org/spinner';
import {useSearchParams} from 'next/navigation';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import PostProfile from '../modules/Profile/Post/PostProfile';
const LoadMore = () => {
	const searchParams = useSearchParams();

	const [posts, setPosts] = useState<any>([]);

	const [loading, setLoading] = useState(true);

	const [page, setPage] = useState(2);

	const {ref, entry} = useInView();

	const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

	const loadMorePosts = async () => {
		// Delay the next request to simulate loading time
		await delay(1000);

		// Increment the page (or loop pages)
		const nextPage = page + 1;

		const query: {
			searchTerm?: string;
			category?: string | null;
			sort?: string | null;
			page?: number;
			limit?: number;
		} = {};

		query.page = nextPage;
		query.limit = 1;

		const searchTerm = searchParams.get('searchTerm')?.trim() || '';
		const category = searchParams.get('category')?.trim() || null;
		const sort = searchParams.get('sort')?.trim() || null;

		if (searchTerm) query.searchTerm = searchTerm;
		if (category) query.category = category;
		if (sort) query.sort = sort;

		const response = await getAllPosts(query);

		const newPosts = response ?? [];

		if (newPosts?.success) {
			// setPosts((prevPosts: IPost[]) => [...prevPosts, ...newPosts]);
			setPosts(newPosts);
			setPage(nextPage); // Update the page for the next load
		} else {
		}
	};

	useEffect(() => {
		if (entry) {
			loadMorePosts();
		}
	}, [entry]);

	useEffect(() => {
		if (posts?.data?.length === 0) {
			setLoading(false);
		}
	}, [posts]);

	return (
		<div>
			<PostProfile posts={posts} />
			<div ref={ref} className="flex justify-center items-center my-3">
				{posts.length > 0 || loading ? (
					<Spinner size="md" />
				) : (
					<div className="text-center text-primary font-bold">No Post Available</div>
				)}
			</div>
		</div>
	);
};

export default LoadMore;
