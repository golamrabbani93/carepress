import {IComment, IPost} from '@/types';
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from '@nextui-org/modal';
import {MessageCircle} from 'lucide-react';
import SingleComment from '../modules/Home/Posts/Comment/SingleComment';
import AddComment from '../modules/Home/Posts/Comment/AddComment';

export default function CommentsModal({post}: {post: IPost}) {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	return (
		<>
			<button
				className="flex items-center space-x-2 text-gray-500 hover:text-primary"
				onClick={onOpen}
			>
				<MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
				<span className="text-sm md:text-base">All Comments</span>
			</button>
			<Modal
				isDismissable={false}
				isKeyboardDismissDisabled={true}
				isOpen={isOpen}
				scrollBehavior="inside"
				size="xl"
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{() => (
						<>
							<ModalHeader className="flex flex-col gap-1 text-center uppercase text-primary">
								{post?.author?.name}&#39;s Post Comments
							</ModalHeader>
							<ModalBody>
								<div className="p-2 sm:p-4">
									{post?.comments.map((comment: IComment) => (
										<SingleComment key={comment._id} comment={comment} />
									))}
								</div>
								<div>
									<AddComment post={post} />
								</div>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
