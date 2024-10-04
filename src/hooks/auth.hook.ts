/* eslint-disable no-console */
import {loginUser, registerUser} from '@/services/AuthService';
import {useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';
import {FieldValues} from 'react-hook-form';
import {toast} from 'sonner';

export const useUserRegistration = () => {
	const router = useRouter();

	return useMutation<any, Error, FieldValues>({
		mutationKey: ['USER_REGISTRATION'],
		mutationFn: async (userData) => {
			const response = await registerUser(userData);

			return response;
		},
		onSuccess: (data) => {
			if (data.success) {
				toast.success(data.message);
				router.push('/login');
			} else {
				toast.error(data.message);
			}
		},
		onError: (_error) => {
			toast.error('Register Failed....');
		},
	});
};
export const useUserLogin = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ['USER_LOGIN'],
		mutationFn: async (userData) => {
			const response = await loginUser(userData);

			return response;
		},
		onSuccess: (data) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
		onError: (_error) => {
			toast.error('Login Failed....Check your email and password');
		},
	});
};
