import AddComment from '@/components/modules/Home/Posts/Comment/AddComment';
import CommentSection from '@/components/modules/Home/Posts/Comment/Comment';
import Post from '@/components/modules/Home/Posts/Post/Post';
import ReactionBar from '@/components/modules/Home/Posts/ReactionBar/ReactionBar';
import TotalReactionBar from '@/components/modules/Home/Posts/TotalReaction/TotalReaction';

import {getAllPosts} from '@/services/Post/post.service';
import {IPost} from '@/types';

const Posts = async () => {
	const posts = await getAllPosts();

	return (
		<div>
			<div className="min-h-screen">
				{posts?.data?.map((post: IPost) => {
					return (
						<div
							key={post._id}
							className="shadow-custom-all-around rounded-lg bg-white border border-gray-200 my-3 "
						>
							<Post post={post} />
							<TotalReactionBar />
							<ReactionBar post={post} />
							<CommentSection post={post} />
							<AddComment />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Posts;
