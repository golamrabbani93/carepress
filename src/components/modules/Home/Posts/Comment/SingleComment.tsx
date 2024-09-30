interface CommentProps {
	name: string;
	text: string;
	time: string;
}

const SingleComment = ({name, text, time}: CommentProps) => {
	return (
		<div className="flex items-start mb-4">
			<img
				src="https://via.placeholder.com/40"
				alt="Profile"
				className="w-10 h-10 rounded-full mr-3"
			/>
			<div className="bg-gray-100 p-2 rounded-lg">
				<div className="flex justify-between">
					<h3 className="font-semibold">{name}</h3>
					<span className="text-xs text-gray-400">{time}</span>
				</div>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default SingleComment;
