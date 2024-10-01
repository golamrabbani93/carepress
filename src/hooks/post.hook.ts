import {createPost, createUpvote} from '@/services/Post/post.service';
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

export const useCreateUpvote = () => {
	return useMutation<any, Error, string>({
		mutationKey: ['CREATE_Upvote'],
		mutationFn: async (postId) => await createUpvote(postId),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				console.log('🚀🚀: useCreateUpvote -> data', data);
				toast.success('Like Updated');
			} else {
				toast.error(data.message);
			}
		},
	});
};
