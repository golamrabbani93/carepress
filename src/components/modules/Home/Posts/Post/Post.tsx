import {IPost} from '@/types';
import Image from 'next/image';

export interface PostProps {
	post: IPost;
}
const Post = ({post}: PostProps) => {
	return (
		<div className="bg-white p-4 max-w-xl mx-auto my-5">
			<div className="flex items-center mb-4">
				<Image
					alt="Profile Image"
					className="rounded-full mr-4"
					height={40}
					src={post?.author?.profilePicture as string} // Replace with actual image path
					width={40}
				/>
				<div>
					<div className="flex justify-center items-center">
						<h2 className="font-semibold">{post?.author?.name}</h2>
						<button className="text-primary font-semibold text-xs ml-2">Follow</button>
					</div>
					<p className="text-gray-400 text-sm">5 hours ago</p>
				</div>
			</div>
			<div className="mb-2">
				<h1 className="text-xl font-bold">{post?.title}</h1>
				<p>{post?.content}</p>
			</div>
			{/* Background Image Section */}
			<div className="relative w-full h-64 rounded-lg overflow-hidden">
				<Image
					alt="Background Image"
					className="absolute"
					layout="fill"
					objectFit="cover"
					src={post?.images[0]} // Replace with actual image path
				/>
			</div>
		</div>
	);
};

export default Post;
