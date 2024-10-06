import LoadMore from '@/components/LoadMore/LoadMore';
import PostProfile from '@/components/modules/Profile/Post/PostProfile';
import {getAllPosts} from '@/services/Post/post.service';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const Posts = async ({searchParams}: {searchParams: any}) => {
	const params = new URLSearchParams(searchParams as string);
	const searchTerm = params.get('searchTerm')?.trim() || '';
	const category = params.get('category')?.trim() || null;
	const sort = params.get('sort')?.trim() || null;

	const query: {
		searchTerm?: string;
		category?: string | null;
		sort?: string | null;
		page?: number;
		limit?: number;
	} = {};

	if (searchTerm) {
		query.searchTerm = searchTerm;
		query.page = 0;
		query.limit = 0;
	} else {
		query.page = 1;
		query.limit = 2;
	}
	if (category) {
		query.category = category;
		query.page = 0;
		query.limit = 0;
	} else {
		query.page = 1;
		query.limit = 2;
	}
	if (sort) {
		query.sort = sort;
		query.page = 0;
		query.limit = 0;
	} else {
		query.page = 1;
		query.limit = 2;
	}

	try {
		const posts = await getAllPosts(query);

		return (
			<div>
				<PostProfile posts={posts} query={query} />
				<LoadMore />
			</div>
		);
	} catch (error) {
		return <p>Failed to load posts. Please try again later.</p>;
	}
};

export default Posts;
