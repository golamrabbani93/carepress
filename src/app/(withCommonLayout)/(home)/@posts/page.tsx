import CommentSection from '@/components/modules/Home/Posts/Comment/Comment';
import Post from '@/components/modules/Home/Posts/Post/Post';
import ReactionBar from '@/components/modules/Home/Posts/ReactionBar/ReactionBar';
import {getAllPosts} from '@/services/Post/post.service';
import {IPost} from '@/types';

const Posts = async () => {
	const posts = await getAllPosts();

	return (
		<div>
			<div className="min-h-screen bg-gray-100">
				{posts?.data?.map((post: IPost) => {
					return (
						<div key={post._id}>
							<Post />
							<ReactionBar />
							<CommentSection />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Posts;
