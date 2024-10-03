import PostsLists from '@/components/modules/Admin/ManagePost/PostsList';
import DashboardHeader from '@/components/UI/DashboardHeader';
import {getAllPosts} from '@/services/Post/post.service';

const ManagePosts = async () => {
	const posts = await getAllPosts();

	return (
		<div>
			<DashboardHeader text="User Post details" />
			<div className="mt-10">
				<PostsLists posts={posts} />
			</div>
		</div>
	);
};

export default ManagePosts;
