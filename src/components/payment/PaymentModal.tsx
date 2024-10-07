'use client';
import {Button} from '@nextui-org/button';
import {Modal, ModalContent, ModalBody, useDisclosure} from '@nextui-org/modal';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import {useUser} from '@/context/user.provider';
import {useRouter} from 'next/navigation';
import Link from 'next/link';
const stripeSecretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string;

export default function PaymentModal() {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const {user} = useUser();
	const router = useRouter();
	// * payment mathod start
	const stripePromise = loadStripe(stripeSecretKey);

	return (
		user?.status !== 'premium' && (
			<div>
				<Button
					type="button"
					className="hover:bg-primary hover:text-white"
					color="primary"
					size="sm"
					variant="bordered"
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
								{user?._id ? (
									<ModalBody>
										<Elements stripe={stripePromise}>
											<CheckoutForm amount={10} onClose={onClose} />
										</Elements>
									</ModalBody>
								) : (
									<ModalBody>
										<div className="text-center py-3">
											<h2 className="text-2xl font-semibold  mb-4 uppercase">Please Login First</h2>
											<p className="text-gray-400 mb-6">
												You need to be logged in to access this feature. Please log in to continue.
											</p>
											<Link href={'/login'}>
												<Button color="primary" variant={'bordered'}>
													Log In Now{' '}
												</Button>
											</Link>
										</div>
									</ModalBody>
								)}
							</>
						)}
					</ModalContent>
				</Modal>
			</div>
		)
	);
}
