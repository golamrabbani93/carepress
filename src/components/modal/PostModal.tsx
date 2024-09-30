'use client';

import {Button} from '@nextui-org/button';
import {Modal, ModalContent, ModalHeader, useDisclosure} from '@nextui-org/modal';
import Editor from '../editor/Editor';
import {useUser} from '@/context/user.provider';
import {useState} from 'react';

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

				{/* Divider */}
				{/* <hr className="my-2" /> */}

				{/* Button Group */}
				{/* <div className="hidden flex justify-between mt-2">
					<button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
						<img
							src="https://via.placeholder.com/20x20?text=🎥"
							alt="Live Video"
							className="h-5 w-5"
						/>
						<span>Live video</span>
					</button>

					<button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
						<img
							src="https://via.placeholder.com/20x20?text=📷"
							alt="Photo/Video"
							className="h-5 w-5"
						/>
						<span>Photo/video</span>
					</button>

					<button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
						<img
							src="https://via.placeholder.com/20x20?text=😊"
							alt="Feeling/Activity"
							className="h-5 w-5"
						/>
						<span>Feeling/activity</span>
					</button>
				</div> */}
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
