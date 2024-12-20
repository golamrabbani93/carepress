import {IComment} from '@/types';
import {PostProps} from '../Post/Post';

import SingleComment from './SingleComment';

const CommentSection = ({post}: PostProps) => {
	const comments = post.comments;

	return (
		<div className="p-2 sm:p-4">
			{comments.slice(0, 1).map((comment: IComment) => (
				<SingleComment key={comment._id} comment={comment} />
			))}
		</div>
	);
};

export default CommentSection;
