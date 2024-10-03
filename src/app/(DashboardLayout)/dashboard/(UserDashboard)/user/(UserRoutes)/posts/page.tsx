import PostProfile from '@/components/modules/Profile/Post/PostProfile';
import {getMyPosts} from '@/services/Post/post.service';

const DashBoardPosts = async () => {
	const posts = await getMyPosts();

	return (
		<div className="pb-10">
			<PostProfile posts={posts} />
		</div>
	);
};

export default DashBoardPosts;
