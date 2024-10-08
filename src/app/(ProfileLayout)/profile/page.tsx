import PostModal from '@/components/modal/PostModal';
import AllPosts from '@/components/modules/Admin/AllPosts/AllPosts';

import {getMyPosts} from '@/services/Post/post.service';

const profilePage = async () => {
	const posts = await getMyPosts();

	return (
		<div>
			<PostModal />
			<AllPosts posts={posts} />
		</div>
	);
};

export default profilePage;
