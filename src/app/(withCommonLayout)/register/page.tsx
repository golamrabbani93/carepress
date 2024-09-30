'use client';

import {useUserRegistration} from '@/hooks/auth.hook';
import {registerValidationSchema} from '@/schemas/register.schema';
import Loader from '@/components/UI/Loader';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button} from '@nextui-org/button';
import Link from 'next/link';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import CPForm from '@/components/form/CPForm';
import CPInput from '@/components/form/CPInput';

export default function RegisterPage() {
	const {mutate: handleUserRegistration, isPending} = useUserRegistration();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const userData = {
			...data,
			role: 'user',
		};

		handleUserRegistration(userData);
	};

	if (isPending) {
		//  handle loading state
	}

	return (
		<>
			{isPending && <Loader />}
			<div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
				<h3 className="my-2 text-xl font-bold">Register with Carepress</h3>
				<p className="mb-4">Help Lost Items Find Their Way Home</p>
				<div className="w-[35%]">
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
							<CPInput label="Name" name="name" size="sm" />
						</div>
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
							Registration
						</Button>
					</CPForm>
					<div className="text-center">
						Already have an account ? <Link href={'/login'}>Login</Link>
					</div>
				</div>
			</div>
		</>
	);
}
