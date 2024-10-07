import {getAllPosts} from '@/services/Post/post.service';
import LatestPosts from './LatestPosts/LatestPosts';

const RightSideBar = async () => {
	try {
		const query = {
			sort: '-createdAt',
			limit: 10,
		};
		const posts = await getAllPosts(query);

		return (
			<>
				<div className="hidden lg:block">
					<LatestPosts data={posts} />
				</div>
			</>
		);
	} catch (error) {
		return <div>Latest Data Fetch Error</div>;
	}
};

export default RightSideBar;
