import AllPosts from '@/components/modules/Admin/AllPosts/AllPosts';
import DashboardHeader from '@/components/UI/DashboardHeader';
import {getAllPosts} from '@/services/Post/post.service';

const ManageContents = async () => {
	try {
		const posts = await getAllPosts('');

		return (
			<div>
				<DashboardHeader text="User Posts Update or delete" />
				<div className="mt-10">
					<AllPosts posts={posts} />
				</div>
			</div>
		);
	} catch (error) {
		return <p>Failed to load posts. Please try again later.</p>;
	}
};

export default ManageContents;
