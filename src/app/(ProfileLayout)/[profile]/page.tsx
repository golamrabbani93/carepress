import PostProfile from '@/components/modules/Profile/Post/PostProfile';
import {getAllPosts} from '@/services/Post/post.service';

const profilePage = async () => {
	const posts = await getAllPosts();

	return (
		<div>
			<PostProfile posts={posts} />
		</div>
	);
};

export default profilePage;
