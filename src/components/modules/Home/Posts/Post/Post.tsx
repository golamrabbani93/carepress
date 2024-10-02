'use client';

import {useMakefollow} from '@/hooks/user.hook';
import {IPost} from '@/types';
import {timeConvert} from '@/utils/timeCovert';

import Image from 'next/image';
import {Spinner} from '@nextui-org/spinner';
import {useUser} from '@/context/user.provider';

export interface PostProps {
	post: IPost;
}
const Post = ({post}: PostProps) => {
	const {user} = useUser();

	// !Post Date
	const postDate = new Date(post.updatedAt);

	// *handle Make follow
	const {mutate: followUser, isPending} = useMakefollow();
	const handleFollow = async () => {
		await followUser(post.author._id);
	};
	// check is my post or not
	const isMyPost = post?.author?._id === user?._id;

	// *check if user is following
	const isUserFollowing = post?.author.followers?.find((item) => item === user?._id);
	const isFollowing = isUserFollowing ? true : false;

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
						<h2 className="font-semibold mr-3">{post?.author?.name}</h2>
						{isFollowing ? (
							<button disabled className="text-primary font-semibold text-xs">
								Following
							</button>
						) : isPending ? (
							<Spinner color="primary" size="sm" />
						) : !isMyPost ? (
							<button
								className="text-primary font-semibold text-xs  hover:scale-110 transition-transform"
								onClick={handleFollow}
							>
								Follow
							</button>
						) : null}
					</div>
					<p className="text-gray-400 text-sm">{timeConvert(postDate)}</p>
				</div>
			</div>
			<div className="mb-2">
				<h1 className="text-xl font-bold">{post?.title}</h1>

				<div dangerouslySetInnerHTML={{__html: post?.content}} />
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
