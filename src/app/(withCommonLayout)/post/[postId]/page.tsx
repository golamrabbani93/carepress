import SinglePost from '@/components/modules/Home/SinglePost/SinglePost';
import {getSinglePost} from '@/services/Post/post.service';

interface IProps {
	params: {
		postId: string;
	};
}

const page = async ({params: {postId}}: IProps) => {
	const {data} = await getSinglePost(postId);

	return (
		<div>
			<SinglePost data={data} />
		</div>
	);
};

export default page;
