'use client';

import {Button} from '@nextui-org/button';
import {Modal, ModalContent, ModalHeader, useDisclosure} from '@nextui-org/modal';
import Editor from '../editor/Editor';
import {useUser} from '@/context/user.provider';

export default function PostModal() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const {user} = useUser();

	return (
		<>
			<div className="p-4 my-5  mx-auto bg-white rounded-lg shadow-custom-all-around">
				{/* Avatar and Input */}
				<div className="flex items-center space-x-3 mb-3">
					<img
						alt="Avatar"
						className="h-10 w-10 rounded-full border border-primary"
						src={
							user?.profilePicture ||
							'https://res.cloudinary.com/dolttvkme/image/upload/v1727577381/profile_acc17l.webp'
						}
					/>

					<Button
						className="w-full  rounded-full py-2 px-4"
						color="primary"
						type="submit"
						variant="bordered"
						onPress={onOpen}
					>
						Share A Post...
					</Button>
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
