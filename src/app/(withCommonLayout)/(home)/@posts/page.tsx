import AddComment from '@/components/modules/Home/Posts/Comment/AddComment';
import CommentSection from '@/components/modules/Home/Posts/Comment/Comment';
import Post from '@/components/modules/Home/Posts/Post/Post';
import ReactionBar from '@/components/modules/Home/Posts/ReactionBar/ReactionBar';
import TotalReactionBar from '@/components/modules/Home/Posts/TotalReaction/TotalReaction';
import {getAllPosts} from '@/services/Post/post.service';
import {IPost} from '@/types';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

const Posts = async ({searchParams}: {searchParams: any}) => {
	const params = new URLSearchParams(searchParams as string);
	const searchTerm = params.get('searchTerm')?.trim() || '';
	const category = params.get('category')?.trim() || null;
	const sort = params.get('sort')?.trim() || null;

	const query: {searchTerm?: string; category?: string | null; sort?: string | null} = {};

	if (searchTerm) query.searchTerm = searchTerm;
	if (category) query.category = category;
	if (sort) query.sort = sort;

	try {
		const posts = await getAllPosts(query);

		return (
			<div>
				{posts?.data.length > 0 ? (
					<div className="min-h-screen">
						{posts?.data?.map((post: IPost) => (
							<div
								key={post._id}
								className={`shadow-custom-all-around rounded-lg border border-gray-100 my-3 ${!post.status && 'hidden'}`}
							>
								<Post post={post} />
								<TotalReactionBar post={post} />
								<ReactionBar post={post} />
								<CommentSection post={post} />
								<AddComment post={post} />
							</div>
						))}
					</div>
				) : (
					<div className="flex justify-center mt-10 h-screen">
						<h1 className="text-2xl text-primary font-bold uppercase">! oops No Posts Found</h1>
					</div>
				)}
			</div>
		);
	} catch (error) {
		return <p>Failed to load posts. Please try again later.</p>;
	}
};

export default Posts;
