import AddComment from '@/components/modules/Home/Posts/Comment/AddComment';
import CommentSection from '@/components/modules/Home/Posts/Comment/Comment';
import Post from '@/components/modules/Home/Posts/Post/Post';
import ReactionBar from '@/components/modules/Home/Posts/ReactionBar/ReactionBar';
import TotalReactionBar from '@/components/modules/Home/Posts/TotalReaction/TotalReaction';

import {getAllPosts} from '@/services/Post/post.service';
import {IPost} from '@/types';

const Posts = async () => {
	try {
		const posts = await getAllPosts();

		return (
			<div>
				<div className="min-h-screen">
					{posts?.data?.map((post: IPost) => {
						return (
							<div
								key={post._id}
								className={`shadow-custom-all-around rounded-lg bg-white border border-gray-200 my-3 ${!post.status && 'hidden'}`}
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
			</div>
		);
	} catch (error) {
		return <p>Failed to load posts. Please try again later.</p>;
	}
};

export default Posts;
