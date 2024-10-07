'use client';

import React, {useState} from 'react';
import {Modal, ModalBody, ModalContent} from '@nextui-org/modal';
import {Button} from '@nextui-org/button';
import {FieldValues} from 'react-hook-form';
import {toast} from 'sonner';
import {Input} from '@nextui-org/input';
import {Spinner} from '@nextui-org/spinner';
const AutoModal = () => {
	const [isPending, setIsPending] = useState(false);
	const [isOpen, setIsOpen] = useState(true);
	const [email, setEmail] = useState('');

	const handleSubmit = async (e: FieldValues) => {
		e.preventDefault();
		setIsPending(true);
		const newData = {
			email,
		};

		try {
			const res = await fetch('http://localhost:5000/api/auth/forget-password', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newData),
			});

			const data = await res.json();

			if (res.ok) {
				toast.success('Password Reset Link Send successful!');
				setIsPending(false);
				setIsOpen(false);
			} else {
				toast.error(data.message || 'Password reset failed');
				setIsPending(false);
			}
		} catch (error) {
			toast.error('Something went wrong');
			setIsPending(false);
		}
	};

	return (
		<>
			{isOpen ? (
				<Modal backdrop="blur" isDismissable={false} isOpen={isOpen} onOpenChange={setIsOpen}>
					<ModalContent>
						<>
							<ModalBody>
								<div className=" ">
									{/* Custom Card */}
									<div className="p-8 w-full max-w-md">
										<h2 className="text-2xl font-bold text-center mb-5">Reset Password</h2>

										<form className="space-y-4" onSubmit={handleSubmit}>
											<Input
												fullWidth
												required
												color="primary"
												placeholder="Enter your email"
												size="lg"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
											<Button fullWidth color="primary" type="submit">
												{isPending ? <Spinner color="white" size="sm" /> : 'Reset Password'}
											</Button>
										</form>
									</div>
								</div>
							</ModalBody>
						</>
					</ModalContent>
				</Modal>
			) : (
				<div className="flex justify-center items-center h-screen ">
					<div className="border border-gray-100 shadow-lg rounded-lg p-8 w-full max-w-md text-center">
						<h2 className="text-2xl font-bold mb-5">Check your email</h2>
						<p className="">We have sent you an email with instructions to reset your password.</p>
					</div>
				</div>
			)}
		</>
	);
};

export default AutoModal;
