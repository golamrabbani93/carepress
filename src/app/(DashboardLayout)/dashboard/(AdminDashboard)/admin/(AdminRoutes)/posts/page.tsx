import PostsLists from '@/components/modules/Admin/ManagePost/PostsList';
import DashboardHeader from '@/components/UI/DashboardHeader';
import {getAllPosts} from '@/services/Post/post.service';

const ManagePosts = async () => {
	try {
		const posts = await getAllPosts('');

		return (
			<div>
				<DashboardHeader text="User Post details" />
				<div className="mt-10">
					<PostsLists posts={posts} />
				</div>
			</div>
		);
	} catch (error) {
		return <p>Failed to load posts. Please try again later.</p>;
	}
};

export default ManagePosts;
