'use client';

import {Button} from '@nextui-org/button';
import {Modal, ModalContent, ModalHeader, useDisclosure} from '@nextui-org/modal';
import Editor from '../editor/Editor';
import {useUser} from '@/context/user.provider';
import {useEffect, useState} from 'react';
import {Skeleton} from '@nextui-org/skeleton';
import {UserRound} from 'lucide-react';
import {useRouter} from 'next/navigation';
import PremiumAvatar from '../PremiumPost/PremiumAvatar';

export default function PostModal() {
	const router = useRouter();
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [isLoading, setIsLoading] = useState(true);
	const {user} = useUser();

	const handleOpenModal = () => {
		if (!user?._id) {
			router.push('/login');
		} else {
			onOpen();
		}
	};

	useEffect(() => {
		if (user) {
			setIsLoading(false);
		} else {
			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
		}
	}, [user]);
	1;

	return (
		<>
			<div
				className={`p-4 my-5  mx-auto  ${!isLoading && 'border'} border-gray-100 rounded-lg shadow-custom-all-around`}
			>
				{/* Avatar and Input */}
				<div className="flex items-center space-x-3 mb-3">
					{isLoading ? (
						// Skeleton for the Avatar
						<Skeleton className="h-10 w-11 rounded-full" />
					) : user?._id ? (
						<PremiumAvatar
							altText={user?.name as string}
							imgSrc={user?.profilePicture}
							status={user?.status === 'premium'}
						/>
					) : (
						<UserRound className="h-10 w-11 rounded-full border border-primary" />
					)}

					{isLoading ? (
						// Skeleton for the Button
						<Skeleton className="h-10 w-full rounded-full" />
					) : (
						<Button
							className="w-full  rounded-full py-2 px-4 hover:bg-primary hover:text-white"
							color="primary"
							type="submit"
							variant="bordered"
							onPress={handleOpenModal}
						>
							Share A Post...
						</Button>
					)}
				</div>
			</div>
			<Modal
				isDismissable={false}
				isKeyboardDismissDisabled={true}
				isOpen={isOpen}
				scrollBehavior={'outside'}
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1 h-full uppercase text-primary font-bold text-2xl">
								Create A Post
							</ModalHeader>
							<Editor onClose={onClose} />
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
