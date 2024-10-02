'use client';

import ProfileLoader from '@/components/Loader/ProfileLoader';
import ProfileEditModal from '@/components/modal/EditProfileModal';
import {Avatar} from '@nextui-org/avatar';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';

export default function ProfilePage({data}: any) {
	const [loading, setloading] = useState(true);
	const user = data?.data;

	useEffect(() => {
		if (data.success) {
			setloading(false);
		}
	}, [user]);

	if (loading) {
		return <ProfileLoader />;
	}

	return (
		<div className=" bg-gray-100 shadow-custom-all-around">
			{/* "Cover photo" */}
			<div className="relative h-60 bg-gray-300">
				<Image
					src="https://res.cloudinary.com/dolttvkme/image/upload/v1727672718/login_x2qqqq.jpg"
					alt="Cover Photo"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			{/*" Profile picture and details" */}
			<div className="relative -mt-16 flex justify-between px-8">
				<div className="flex items-end space-x-4">
					{/* Profile picture */}
					<div className="w-36 h-36 rounded-full border-4 border-white overflow-hidden">
						<Avatar className="w-full h-full object-cover" size="lg" src={user?.profilePicture} />
					</div>

					{/* User details */}
					<div>
						<h1 className="text-2xl font-semibold">{user?.name}</h1>
						<p className="text-gray-600">{user?.followers?.length} Followers</p>
					</div>
				</div>

				<ProfileEditModal user={user} />
			</div>

			{/* Navigation Tabs */}
			<div className="mt-6 ">
				<div className="max-w-4xl mx-auto px-4 flex space-x-8">
					<Link href={'/profile'} className="text-primary border-b-2 border-primary py-2">
						Posts
					</Link>
					<Link
						href={'/profile/follower'}
						className="hover:text-primary hover:border-b-2 hover:border-primary py-2"
					>
						Follower
					</Link>
				</div>
			</div>
		</div>
	);
}
