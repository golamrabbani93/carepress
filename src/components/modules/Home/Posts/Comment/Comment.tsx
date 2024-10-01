import {IComment} from '@/types';
import {PostProps} from '../Post/Post';

import SingleComment from './SingleComment';

const CommentSection = ({post}: PostProps) => {
	const comments = post.comments;

	return (
		<div className="p-4">
			{comments.map((comment: IComment) => (
				<SingleComment key={comment._id} comment={comment} />
			))}
		</div>
	);
};

export default CommentSection;
