'use client';
import {Button} from '@nextui-org/button';
import {Modal, ModalContent, ModalBody, useDisclosure} from '@nextui-org/modal';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripeSecretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string;

export default function PaymentModal() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	// * payment mathod start
	const stripePromise = loadStripe(stripeSecretKey);

	return (
		<>
			<Button
				className="hover:bg-primary hover:text-white"
				variant="bordered"
				color="primary"
				size="sm"
				onPress={onOpen}
			>
				SUBSCRIBE NOW
			</Button>
			<Modal
				backdrop="opaque"
				className="bg-black"
				isOpen={isOpen}
				motionProps={{
					variants: {
						enter: {
							y: 0,
							opacity: 1,
							transition: {
								duration: 0.3,
								ease: 'easeOut',
							},
						},
						exit: {
							y: -20,
							opacity: 0,
							transition: {
								duration: 0.2,
								ease: 'easeIn',
							},
						},
					},
				}}
				onOpenChange={onOpenChange}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalBody>
								<Elements stripe={stripePromise}>
									<CheckoutForm amount={10} onClose={onClose} />
								</Elements>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
