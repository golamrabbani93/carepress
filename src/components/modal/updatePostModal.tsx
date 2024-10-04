'use client';

import {Modal, ModalContent, ModalHeader, useDisclosure} from '@nextui-org/modal';

import {PostModalProps} from './DeletePostModal';
import {Button} from '@nextui-org/button';

import UpdateEditor from '../updateEditor/Editor';

export default function UpdatePostModal({setShowOptions, post}: PostModalProps) {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			{/* Avatar and Input */}
			<div className="flex items-center space-x-3 mb-3">
				<Button
					className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
					variant="light"
					onPress={onOpen}
				>
					Edit Post
				</Button>
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
							<UpdateEditor post={post} setShowOptions={setShowOptions} onClose={onClose} />
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
