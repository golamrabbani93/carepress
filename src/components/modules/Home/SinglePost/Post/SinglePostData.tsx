'use client';

import {useMakefollow} from '@/hooks/user.hook';
import {IPost} from '@/types';
import {timeConvert} from '@/utils/timeCovert';

import Image from 'next/image';
import {Spinner} from '@nextui-org/spinner';
import {useUser} from '@/context/user.provider';
import {useRouter} from 'next/navigation';
import {EllipsisVertical} from 'lucide-react';
import DeletePostModal from '@/components/modal/DeletePostModal';
import {useState} from 'react';
import UpdatePostModal from '@/components/modal/updatePostModal';
import ImageGallery from '../ImageGallery/ImageGallery';

export interface PostProps {
	post: IPost;
}
const SinglePostData = ({post}: PostProps) => {
	const {user} = useUser();
	const router = useRouter();

	// *handle options for post delete and edit
	const [showOptions, setShowOptions] = useState(false);
	const handleToggleOptions = () => {
		setShowOptions(!showOptions); // Toggle dropdown visibility
	};

	// !Post Date
	const postDate = new Date(post?.createdAt as string);

	// *handle Make follow
	const {mutate: followUser, isPending} = useMakefollow();
	const handleFollow = async () => {
		if (!user?._id) {
			router.push('/login');
		} else {
			await followUser(post.author._id);
		}
	};
	// check is my post or not
	const isMyPost = post?.author?._id === user?._id;

	// *check if user is following
	const isUserFollowing = post?.author.followers?.find((item) => item === user?._id);
	const isFollowing = isUserFollowing ? true : false;

	return (
		<div className={`p-4  mx-auto my-5`}>
			{!post?.status && post?.author?._id === user?._id && (
				<h3 className="text-red-500 font-bold border border-red-500 p-3 mb-4 rounded-md ">
					This post is currently a draft and isn&apos;t visible to anyone. Please contact the admin
					for further assistance.
				</h3>
			)}
			{!post?.status && user?.role === 'ADMIN' && (
				<h3 className="text-red-500 font-bold border border-red-500 p-3 mb-4 rounded-md ">
					Admin set this post as a draft
				</h3>
			)}
			<div className="flex justify-between mb-4">
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
						{post.createdAt && <p className="text-sm text-gray-400">{timeConvert(postDate)}</p>}
					</div>
				</div>
				<div className="relative">
					{(isMyPost || user?.role === 'ADMIN') && (
						<div>
							<EllipsisVertical className="cursor-pointer" onClick={handleToggleOptions} />
						</div>
					)}
					{showOptions && (
						<div className="absolute -top-[6px] right-[35px] mt-2 w-32 border border-gray-100 rounded-md shadow-custom-all-around ring-1 ring-black ring-opacity-5 z-10">
							<div className="py-1">
								<UpdatePostModal post={post} setShowOptions={setShowOptions} />
								<DeletePostModal post={post} setShowOptions={setShowOptions} />
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="mb-3">
				<h1 className="text-2xl font-bold mb-3 w-fit">{post?.title}</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: `${post.content}`,
					}}
				/>
			</div>

			<ImageGallery images={post?.images} />
		</div>
	);
};

export default SinglePostData;
