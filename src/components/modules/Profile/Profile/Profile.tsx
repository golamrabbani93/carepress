'use client';

import ProfileLoader from '@/components/Loader/ProfileLoader';
import ProfileEditModal from '@/components/modal/EditProfileModal';
import {Avatar} from '@nextui-org/avatar';
import {Crown} from 'lucide-react';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useEffect, useState} from 'react';

export default function ProfilePage({data}: any) {
	const [loading, setloading] = useState(true);
	const user = data?.data;

	const pathnames = usePathname();

	useEffect(() => {
		if (data.success) {
			setloading(false);
		}
	}, [user]);

	if (loading) {
		return <ProfileLoader />;
	}

	return (
		<div className="  shadow-custom-all-around">
			{/* "Cover photo" */}
			<div className="relative h-60 ">
				<Image
					alt="Cover Photo"
					layout="fill"
					objectFit="cover"
					src="https://res.cloudinary.com/dolttvkme/image/upload/v1727672718/login_x2qqqq.jpg"
				/>
			</div>

			{/*" Profile picture and details" */}
			<div className="relative -mt-16 flex justify-between px-8">
				<div className="flex items-end space-x-4">
					{/* Profile picture */}
					<div className="relative w-36 h-36 rounded-full border-4 border-white ">
						{/* Avatar Component */}
						<Avatar className="w-full h-full object-cover" size="lg" src={user?.profilePicture} />

						{/* Premium Badge */}
						<div className="absolute bottom-2 right-5 bg-blue-700 rounded-full p-1.5 shadow-lg z-20">
							<Crown className="text-white" size={16} />
						</div>
					</div>

					{/* User details */}
					<div>
						<h1 className="sm:text-2xl font-semibold">{user?.name}</h1>
						<p className="text-gray-500">{user?.followers?.length} Followers</p>
					</div>
				</div>

				<div className="hidden sm:block">
					<ProfileEditModal user={user} />
				</div>
			</div>
			<div className="flex justify-center items-center sm:hidden mt-4">
				{/* Navigation Tabs */}
				<ProfileEditModal user={user} />
			</div>
			{/* Navigation Tabs */}
			<div className="mt-6 ">
				<div className="max-w-4xl mx-auto px-4 flex space-x-8">
					<Link
						className={`hover:text-primary hover:border-b-2 hover:border-primary py-2 ${pathnames === '/profile' && 'text-primary border-b-2 border-primary'}`}
						href={'/profile'}
					>
						Posts
					</Link>
					<Link
						className={`hover:text-primary hover:border-b-2 hover:border-primary py-2 ${pathnames === '/profile/following' && 'text-primary border-b-2 border-primary'}`}
						href={'/profile/following'}
					>
						Following
					</Link>
					<Link
						className={`hover:text-primary hover:border-b-2 hover:border-primary py-2 ${pathnames === '/profile/follower' && 'text-primary border-b-2 border-primary'}`}
						href={'/profile/follower'}
					>
						Follower
					</Link>
				</div>
			</div>
		</div>
	);
}
