import Comment from './Comment';
import SingleComment from './SingleComment';

interface Comment {
	name: string;
	text: string;
	time: string;
}

const comments: Comment[] = [
	{
		name: 'Hasiba Akter Srity',
		text: 'আবার পাঠাও কীন্যা না জাতীয় বিশ্ববিদ্যালয় ড্রাইভে',
		time: '3h',
	},
];

const CommentSection: React.FC = () => {
	return (
		<div className="p-4">
			{comments.map((comment, index) => (
				<SingleComment key={index} name={comment.name} text={comment.text} time={comment.time} />
			))}
		</div>
	);
};

export default CommentSection;
