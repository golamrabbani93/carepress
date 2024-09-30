import {createPost} from '@/services/Post/post.service';
import {useMutation} from '@tanstack/react-query';
import {toast} from 'sonner';

export const useCreatePost = () => {
	return useMutation<any, Error, FormData>({
		mutationKey: ['CREATE_POST'],
		mutationFn: async (postData) => await createPost(postData),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
	});
};
