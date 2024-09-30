const ReactionBar = () => {
	return (
		<div className="flex justify-between px-4 py-2 border-t border-gray-200">
			<button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
				<i className="fas fa-thumbs-up"></i>
				<span>Like</span>
			</button>
			<button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
				<i className="fas fa-comment-alt"></i>
				<span>Comment</span>
			</button>
			<button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
				<i className="fas fa-share"></i>
				<span>Share</span>
			</button>
		</div>
	);
};

export default ReactionBar;
