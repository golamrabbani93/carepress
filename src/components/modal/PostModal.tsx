'use client';

import {Button} from '@nextui-org/button';
import {Modal, ModalContent, ModalHeader, useDisclosure} from '@nextui-org/modal';
import Editor from '../editor/Editor';
import {useUser} from '@/context/user.provider';
import {useEffect, useState} from 'react';
import {Skeleton} from '@nextui-org/skeleton';

export default function PostModal() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [isLoading, setIsLoading] = useState(true);
	const {user} = useUser();

	useEffect(() => {
		if (user) {
			setIsLoading(false);
		}
	}, [user]);

	return (
		<>
			<div className="p-4 my-5  mx-auto bg-white rounded-lg shadow-custom-all-around">
				{/* Avatar and Input */}
				<div className="flex items-center space-x-3 mb-3">
					{isLoading ? (
						// Skeleton for the Avatar
						<Skeleton className="h-10 w-11 rounded-full" />
					) : (
						<img
							alt="Avatar"
							className="h-10 w-10 rounded-full border border-primary"
							src={user?.profilePicture}
						/>
					)}

					{isLoading ? (
						// Skeleton for the Button
						<Skeleton className="h-10 w-full rounded-full" />
					) : (
						<Button
							className="w-full  rounded-full py-2 px-4"
							color="primary"
							type="submit"
							variant="bordered"
							onPress={onOpen}
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
							<ModalHeader className="flex flex-col gap-1 h-full">Create A Post</ModalHeader>
							<Editor onClose={onClose} />
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
