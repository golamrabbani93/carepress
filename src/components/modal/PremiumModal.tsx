'use client';

import React, {useState, useEffect} from 'react';
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from '@nextui-org/modal';
import {Button} from '@nextui-org/button';
import {useUser} from '@/context/user.provider';

const AutoModal = () => {
	const {user} = useUser();
	const [isOpen, setIsOpen] = useState(false);

	// Automatically open the modal when the component mounts
	useEffect(() => {
		if (user?.status === 'basic' || user === null) {
			setTimeout(() => {
				setIsOpen(true);
			}, 1500);
		} else {
			setIsOpen(false);
		}
	}, [user]);

	// Handler to close the modal
	const onClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Modal backdrop="blur" isDismissable={false} isOpen={isOpen} onOpenChange={setIsOpen}>
				<ModalContent>
					<>
						<ModalHeader>Welcome to the Website</ModalHeader>
						<ModalBody>
							<p>Thank you for visiting! We hope you enjoy your time here.</p>
						</ModalBody>
						<ModalFooter>
							<Button color="danger" variant="light" onPress={onClose}>
								Close
							</Button>
							<Button color="primary" onPress={onClose}>
								Continue
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AutoModal;
