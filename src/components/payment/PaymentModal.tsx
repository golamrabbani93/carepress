'use client';
import {Button} from '@nextui-org/button';
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from '@nextui-org/modal';
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
			<Button onPress={onOpen}>Pay</Button>
			<Modal
				backdrop="opaque"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
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
			>
				<ModalContent>
					{() => (
						<>
							<ModalBody>
								<Elements stripe={stripePromise}>
									<CheckoutForm amount={10} />
								</Elements>
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}
