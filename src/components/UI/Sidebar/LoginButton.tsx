'use client';
import {useUser} from '@/context/user.provider';
import {Button} from '@nextui-org/button';
import {LogInIcon} from 'lucide-react';
import Link from 'next/link';

const LoginButton = () => {
	const {user} = useUser();

	return (
		!user && (
			<Link href={'/login'}>
				<Button
					className="hover:bg-primary hover:text-white mr-2"
					color="primary"
					size="sm"
					startContent={<LogInIcon />}
					variant="bordered"
				>
					Login
				</Button>
			</Link>
		)
	);
};

export default LoginButton;
