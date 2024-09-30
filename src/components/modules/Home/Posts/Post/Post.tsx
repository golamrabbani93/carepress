import Image from 'next/image';

const Post = () => {
	return (
		<div className="bg-white shadow-lg rounded-lg p-4 max-w-xl mx-auto my-5">
			<div className="flex items-center mb-4">
				<Image
					src="/path-to-profile-picture.jpg" // Replace with actual image path
					alt="Profile Image"
					width={40}
					height={40}
					className="rounded-full mr-4"
				/>
				<div>
					<h2 className="font-semibold">Muhammad Shamim</h2>
					<p className="text-gray-400 text-sm">5 hours ago</p>
				</div>
			</div>

			{/* Background Image Section */}
			<div className="relative w-full h-64 rounded-lg overflow-hidden">
				<Image
					src="/path-to-image.jpg" // Replace with actual image path
					alt="Background Image"
					layout="fill"
					objectFit="cover"
					className="absolute"
				/>
				{/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
					<h1 className="text-xl font-bold">ব্রেকিং নিউজ</h1>
					<p>আবারো অনার্স ১ম বর্ষের রুটিন সংশোধন!</p>
				</div> */}
			</div>
		</div>
	);
};

export default Post;
