import {IComment} from '@/types';

interface CommentProps {
	comment: IComment;
}

const SingleComment = ({comment}: CommentProps) => {
	return (
		<div className="flex items-start mb-4">
			<img
				src={comment.author.profilePicture}
				alt="Profile"
				className="w-10 h-10 rounded-full mr-3"
			/>
			<div className="bg-gray-100 p-2 rounded-lg">
				<div className="flex justify-between">
					<h3 className="font-semibold">{comment.author.name}</h3>
					<span className="text-xs text-gray-400">time</span>
				</div>
				<p>{comment.content}</p>
			</div>
		</div>
	);
};

export default SingleComment;
