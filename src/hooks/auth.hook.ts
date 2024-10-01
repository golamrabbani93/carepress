import {loginUser, registerUser} from '@/services/AuthService';
import {useMutation} from '@tanstack/react-query';

import {FieldValues} from 'react-hook-form';
import {toast} from 'sonner';

export const useUserRegistration = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ['USER_REGISTRATION'],
		mutationFn: async (userData) => await registerUser(userData),
		onSuccess: (data) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
	});
};
export const useUserLogin = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ['USER_LOGIN'],
		mutationFn: async (userData) => await loginUser(userData),
		onSuccess: (data) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
	});
};
