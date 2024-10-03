import {getUser, makeFollow, makeUnFollow, userUpdate} from '@/services/User/user.service';
import {useMutation, useQuery} from '@tanstack/react-query';
import {toast} from 'sonner';

export const useMakefollow = () => {
	return useMutation<any, Error, string>({
		mutationKey: ['MAKE_FOLLOW'],
		mutationFn: async (followId) => await makeFollow(followId),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success('Follow Completed');
			} else {
				toast.error(data.message);
			}
		},
		onError: (_error) => {
			toast.error('Failed to follow');
		},
	});
};

export const useMakeUnfollow = () => {
	return useMutation<any, Error, string>({
		mutationKey: ['MAKE_FOLLOW'],
		mutationFn: async (followId) => await makeUnFollow(followId),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success('Unfollow Completed');
			} else {
				toast.error(data.message);
			}
		},
		onError: (_error) => {
			toast.error('Failed to Unfollow');
		},
	});
};

// *get User

export const useGetMyProfile = () => {
	return useQuery({
		queryKey: ['GET_MY_PROFILE'],
		queryFn: async () => await getUser(),
	});
};

// *user update
export const useUserUpdate = () => {
	return useMutation<any, Error, FormData>({
		mutationKey: ['USER_UPDATE'],
		mutationFn: async (userData) => await userUpdate(userData),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
		onError: (_error) => {
			toast.error('Failed to Update');
		},
	});
};
