import {IComment} from '@/types';
import {Button} from '@nextui-org/button';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/modal';

interface DeleteCommentModalProps {
	setShowOptions: (value: boolean) => void;
	comment: IComment;
}
export default function DeleteCommentModal({setShowOptions, comment}: DeleteCommentModalProps) {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	const handleDeleteComment = async () => {
		console.log('Delete Comment');
		// !check user is logged in
		// if (!user?._id) {
		// 	toast.error('Please login to Comment the post');
		// } else {
		// 	// handleDeleteComment(comment._id);
		// }
	};

	return (
		<>
			<Button
				className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
				variant="light"
				onPress={onOpen}
			>
				Delete
			</Button>
			{/* "<button
				className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
				onClick={handleOpenModal}
			>
				Deletes
			</button> */}
			<Modal isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
							<ModalBody>
								<p>Are you sure you want to delete this comment?</p>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Close
								</Button>
								<Button color="primary" onPress={handleDeleteComment}>
									Delete
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
