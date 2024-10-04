import PostProfile from '@/components/modules/Profile/Post/PostProfile';
import {getMyPosts} from '@/services/Post/post.service';

const profilePage = async () => {
	const posts = await getMyPosts();

	return (
		<div>
			<PostProfile posts={posts} />
		</div>
	);
};

export default profilePage;
