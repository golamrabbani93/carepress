/* eslint-disable react/no-unescaped-entities */
'use client';

import {useUserLogin} from '@/hooks/auth.hook';
import {loginValidationSchema} from '@/schemas/login.schema';
import Loader from '@/components/UI/Loader';
import {useUser} from '@/context/user.provider';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@nextui-org/button';
import Link from 'next/link';
import {useRouter, useSearchParams} from 'next/navigation';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import CPForm from '@/components/form/CPForm';
import CPInput from '@/components/form/CPInput';
import Container from '@/components/UI/Container';
import Image from 'next/image';
import {Spinner} from '@nextui-org/spinner';
export default function LoginPage() {
	const {setIsLoading: userLoader} = useUser();
	const {mutate: handleUserLogin, isPending, isSuccess, data} = useUserLogin();
	console.log('🚀🚀: LoginPage -> data', data);
	const searchParams = useSearchParams();
	const router = useRouter();
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		handleUserLogin(data);
		userLoader(true);
	};
	const redirect = searchParams.get('redirect');

	if (!isPending && isSuccess && data?.success) {
		if (redirect) {
			router.push(redirect);
		} else {
			router.push('/');
		}
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
					<div className="flex items-center justify-center w-full bg-white/20 backdrop-blur-lg p-8 rounded-lg shadow-xl">
						<div className="w-full max-w-md">
							<h3 className="text-3xl font-extrabold text-center text-primary mb-6 uppercase ">
								Login to Carepress
							</h3>

							<CPForm
								//! Only for development
								defaultValues={{
									email: 'rabbani@gmail.com',
									password: '123456',
								}}
								resolver={zodResolver(loginValidationSchema)}
								onSubmit={onSubmit}
							>
								<div className="py-4">
									<CPInput
										label="Email"
										name="email"
										size="sm"
										className="text-black hover:border-red-500"
									/>
								</div>

								<div className="py-4">
									<CPInput
										label="Password"
										name="password"
										size="sm"
										type="password"
										className="text-black"
									/>
								</div>

								<Button
									className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full shadow-lg hover:from-pink-600 hover:to-red-500 transition-transform transform hover:scale-105 font-semibold"
									size="lg"
									type="submit"
								>
									{isPending ? <Spinner color="white" /> : 'Login'}
								</Button>
							</CPForm>

							<div className="text-center mt-6">
								<p className="text-sm text-gray-600">
									Don't have an account?{' '}
									<Link href={'/register'} className="text-indigo-600 hover:underline">
										Register
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Right side with login form */}
		</div>
	);
}
