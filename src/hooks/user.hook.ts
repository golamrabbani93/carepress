import {getUser, makeFollow} from '@/services/User/user.service';
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
				console.log(data);
				toast.error(data.message);
			}
		},
		onError: (_error) => {
			toast.error('Failed to follow');
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
