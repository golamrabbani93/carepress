'use client';

import {useUser} from '@/context/user.provider';
import {logout} from '@/services/AuthService';
import {Avatar} from '@nextui-org/avatar';
import {Button} from '@nextui-org/button';
import {Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from '@nextui-org/dropdown';
import {LoginIcon} from '../icons';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import {protectedRoutes} from '@/constants/private-routes';

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
			{user?._id ? (
				<Dropdown>
					<DropdownTrigger>
						<Avatar className="cursor-pointer" src={user?.profilePhoto} />
					</DropdownTrigger>
					<DropdownMenu aria-label="Link Actions">
						<DropdownItem key="profile" href="/profile">
							Profile
						</DropdownItem>
						<DropdownItem key="Create-Post" href="/profile/create-post">
							Create-Post
						</DropdownItem>
						<DropdownItem key="setting" href="/profile/setting">
							Setting
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
			) : (
				<Link href={'/login'}>
					<Button color="primary" startContent={<LoginIcon />} variant="bordered">
						Login
					</Button>
				</Link>
			)}
		</>
	);
};

export default AvatarDropdown;
