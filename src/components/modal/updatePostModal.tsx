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
			<div className="flex items-center mb-3">
				<Button
					className={`mt-2  mx-auto  rounded-lg shadow-custom-all-around  hover:bg-primary hover:text-white uppercase`}
					color="primary"
					size="sm"
					variant="bordered"
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
							<ModalHeader className="flex flex-col gap-1 h-full">Update Post</ModalHeader>
							<UpdateEditor post={post} setShowOptions={setShowOptions} onClose={onClose} />
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
