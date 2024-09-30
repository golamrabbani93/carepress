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
		<div>
			{isPending && <Loader />}
			<div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
				<h3 className="my-2 text-xl font-bold">Login with Carepress</h3>
				<p className="mb-4">Help Lost Items Find Their Way Home</p>
				<div className="w-[35%]">
					<CPForm
						//! Only for development
						defaultValues={{
							email: 'rabbani@gmail.com',
							password: '123456',
						}}
						resolver={zodResolver(loginValidationSchema)}
						onSubmit={onSubmit}
					>
						<div className="py-3">
							<CPInput label="Email" name="email" size="sm" />
						</div>

						<div className="py-3">
							<CPInput label="Password" name="password" size="sm" type="password" />
						</div>

						<Button
							className="my-3 w-full rounded-md bg-default-900 text-default"
							size="lg"
							type="submit"
						>
							Login
						</Button>
					</CPForm>
					<div className="text-center">
						Don't have an account ? <Link href={'/register'}>Register</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
