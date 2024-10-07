'use client';

import {useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from '@nextui-org/modal';
import {Button} from '@nextui-org/button';
import {CheckCircle} from 'lucide-react';
import Link from 'next/link';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';

const Profile = () => {
	const [isOpen, setIsOpen] = useState(true);
	const searchParams = useSearchParams();
	const [modalData, setModalData] = useState<any>(null);
	const getData = searchParams.get('data');

	// Decode the data from URL
	const data = getData ? JSON.parse(decodeURIComponent(getData)) : null;

	useEffect(() => {
		if (data) {
			setModalData(data);
		}
	}, [data]);

	// Handle closing modal and redirecting
	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			{isOpen && (
				<Modal backdrop="blur" isDismissable={false} isOpen={isOpen} onOpenChange={setIsOpen}>
					<ModalContent>
						<ModalHeader className="text-center">
							<div className="flex items-center justify-center mb-4">
								<CheckCircle className="text-green-500" size={40} />
							</div>
							<h2 className="text-xl font-bold text-green-600">Payment Successful!</h2>
						</ModalHeader>

						<ModalBody>
							<p className="text-center text-gray-400 mb-4">
								Thank you for your payment. Your transaction has been processed successfully.
							</p>

							<div className="flex justify-center">
								<div className="text-center">
									<h3 className="text-lg font-semibold">Transaction Details</h3>
									<p className="text-sm text-gray-400">Transaction ID: {modalData?.paymentId}</p>
									<p className="text-sm text-gray-400">Date: {modalData?.date}</p>
									<p className="text-sm text-gray-400">Amount: $ {modalData?.amount}</p>
								</div>
							</div>
						</ModalBody>

						<ModalFooter className="justify-center">
							<Link className="w-full block" href="/">
								<Button className="w-full" color="primary" onClick={handleClose}>
									Close
								</Button>
							</Link>
						</ModalFooter>
					</ModalContent>
				</Modal>
			)}

			{!isOpen && (
				<div className="flex flex-col items-center justify-center h-screen">
					<h1 className="text-2xl font-bold">Redirecting To Profile Page...</h1>
					<p className="text-gray-500">Please wait while we redirect you to the profile page.</p>
				</div>
			)}
		</>
	);
};

export default Profile;
