import {IPost} from '@/types';
import {Button} from '@nextui-org/button';
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from '@nextui-org/modal';
import {useEffect} from 'react';
import {Spinner} from '@nextui-org/spinner';
import {UseDeletePost} from '@/hooks/post.hook';
export interface PostModalProps {
	setShowOptions: (value: boolean) => void;
	post: IPost;
}
export default function DeletePostModal({setShowOptions, post}: PostModalProps) {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const {mutate: deletePost, isPending, data} = UseDeletePost();

	const handleDeletePost = async () => {
		deletePost(post._id);
	};

	useEffect(() => {
		if (data && data.success) {
			setShowOptions(false);
			onOpenChange();
		}
	}, [data]);

	return (
		<>
			<div className="flex items-center mb-3">
				<Button
					className={`mx-auto  rounded-lg shadow-custom-all-around  hover:bg-primary hover:text-white uppercase`}
					color="primary"
					size="sm"
					variant="bordered"
					onPress={onOpen}
				>
					Delete
				</Button>
			</div>
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
							<ModalHeader className="flex flex-col gap-1">Post Delete Action</ModalHeader>
							<ModalBody>
								<p>Are you sure you want to delete this Post?</p>
							</ModalBody>
							<ModalFooter>
								<Button
									color="danger"
									variant="light"
									onPress={() => {
										onClose();
										setShowOptions(false);
									}}
								>
									Close
								</Button>
								<Button color="primary" isDisabled={isPending} onPress={handleDeletePost}>
									{isPending ? <Spinner color="white" size="sm" /> : 'Delete'}
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
