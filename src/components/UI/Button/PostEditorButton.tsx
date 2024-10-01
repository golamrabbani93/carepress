import React from 'react';

const PostEditorButton = () => {
	return (
		<div className="p-4 max-w-xl mx-auto bg-white rounded-lg shadow-md">
			{/* Avatar and Input */}
			<div className="flex items-center space-x-3 mb-3">
				<img alt="Avatar" className="h-10 w-10 rounded-full" src="https://via.placeholder.com/40" />
				<button className="w-full text-left bg-gray-100 rounded-full py-2 px-4 outline-none hover:bg-gray-200">
					Whats on your mind?
				</button>
			</div>

			{/* Divider */}
			{/* <hr className="my-2" /> */}

			{/* Button Group */}
			<div className="hidden flex justify-between mt-2">
				<button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
					<img
						alt="Live Video"
						className="h-5 w-5"
						src="https://via.placeholder.com/20x20?text=🎥"
					/>
					<span>Live video</span>
				</button>

				<button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
					<img
						alt="Photo/Video"
						className="h-5 w-5"
						src="https://via.placeholder.com/20x20?text=📷"
					/>
					<span>Photo/video</span>
				</button>

				<button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
					<img
						alt="Feeling/Activity"
						className="h-5 w-5"
						src="https://via.placeholder.com/20x20?text=😊"
					/>
					<span>Feeling/activity</span>
				</button>
			</div>
		</div>
	);
};

export default PostEditorButton;
