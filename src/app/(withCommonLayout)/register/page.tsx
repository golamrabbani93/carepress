'use client';

import {useUserRegistration} from '@/hooks/auth.hook';
import {registerValidationSchema} from '@/schemas/register.schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@nextui-org/button';
import Link from 'next/link';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import CPForm from '@/components/form/CPForm';
import CPInput from '@/components/form/CPInput';
import {Spinner} from '@nextui-org/spinner';
export default function RegisterPage() {
	const {mutate: handleUserRegistration, isPending} = useUserRegistration();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const userData = {
			...data,
		};
		const formData = new FormData();

		formData.append('data', JSON.stringify(userData));

		handleUserRegistration(formData);
	};

	if (isPending) {
		//  handle loading state
	}

	return (
		<div className="flex h-screen w-full">
			{/* Left side with background image */}
			<div
				className="w-full h-full bg-cover bg-center"
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/dolttvkme/image/upload/v1727672718/login_x2qqqq.jpg')",
				}}
			>
				<div className="flex items-center justify-center w-full bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-xl h-full">
					<div className="flex items-center justify-center w-full bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-xl ">
						<div className="w-full max-w-md">
							<h3 className="text-3xl font-extrabold text-center text-primary mb-6 uppercase ">
								Register to Carepress
							</h3>
							<div>
								<CPForm
									//! Only for development
									defaultValues={{
										name: 'Golam Rabbani',
										email: 'rabbani@gmail.com',
										password: '123456',
									}}
									resolver={zodResolver(registerValidationSchema)}
									onSubmit={onSubmit}
								>
									<div className="py-3">
										<CPInput className="text-black" label="Name" name="name" size="sm" />
									</div>
									<div className="py-3">
										<CPInput className="text-black" label="Email" name="email" size="sm" />
									</div>
									<div className="py-3">
										<CPInput
											className="text-black"
											label="Password"
											name="password"
											size="sm"
											type="password"
										/>
									</div>

									<Button
										className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-red-500 transition-transform transform hover:scale-105 font-semibold"
										size="lg"
										type="submit"
										isDisabled={isPending}
									>
										{isPending ? <Spinner color="white" /> : 'Register'}
									</Button>
								</CPForm>
							</div>
							<div className="text-center">
								Already have an account ?{' '}
								<Link className="text-primary hover:underline" href={'/login'}>
									Login
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
