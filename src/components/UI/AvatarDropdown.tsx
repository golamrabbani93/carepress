'use client';

import {useUser} from '@/context/user.provider';
import {logout} from '@/services/AuthService';
import {Avatar} from '@nextui-org/avatar';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from '@nextui-org/dropdown';
import {usePathname, useRouter} from 'next/navigation';
import {protectedRoutes} from '@/constants/private-routes';
import {Crown} from 'lucide-react';

const AvatarDropdown = () => {
	const {user, setIsLoading: userLoader} = useUser();
	const pathname = usePathname();
	const router = useRouter();
	const handleLogout = () => {
		logout();
		userLoader(true);

		// * handle protected route when logout button trigger
		if (protectedRoutes.some((route) => pathname.match(route))) {
			router.push('/');
		}
	};

	return (
		<>
			{user?._id && (
				<Dropdown>
					<DropdownTrigger>
						<div className="relative cursor-pointer">
							{/* Avatar Component */}
							<Avatar radius="full" src={user?.profilePicture} />

							{/* Premium Badge */}
							{user?.status === 'premium' && (
								<div className="absolute bottom-0 right-0 bg-blue-700 rounded-full p-1.5 shadow-lg">
									<Crown className="text-white" size={11} />
								</div>
							)}
						</div>
					</DropdownTrigger>
					<DropdownMenu aria-label="Link Actions">
						<DropdownItem key="profile" href={`/profile`}>
							My Profile
						</DropdownItem>
						<DropdownItem
							key="Create-Post"
							href={user?.role === 'ADMIN' ? '/dashboard/admin' : '/dashboard/user'}
						>
							Dashboard
						</DropdownItem>

						<DropdownItem
							key="delete"
							className="text-danger"
							color="danger"
							onClick={() => handleLogout()}
						>
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			)}
		</>
	);
};

export default AvatarDropdown;
