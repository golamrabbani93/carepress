import AllPosts from '@/components/modules/Admin/AllPosts/AllPosts';
import DashboardHeader from '@/components/UI/DashboardHeader';
import {getAllPosts} from '@/services/Post/post.service';

const ManageContents = async () => {
	const posts = await getAllPosts();

	return (
		<div>
			<DashboardHeader text="User Posts Update or delete " />
			<div className="mt-10">
				<AllPosts posts={posts} />
			</div>
		</div>
	);
};

export default ManageContents;
