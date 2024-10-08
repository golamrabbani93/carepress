import {
	createDownVote,
	createPost,
	createUpvote,
	deletePost,
	updatePost,
	updatePostStatus,
} from '@/services/Post/post.service';
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

export const useUpdatePost = () => {
	return useMutation<any, Error, {postId: string; postData: FormData}>({
		mutationKey: ['UPDATE_POST'],
		mutationFn: async ({postId, postData}) => await updatePost(postId, postData),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
	});
};

export const useCreateUpVote = () => {
	return useMutation<any, Error, string>({
		mutationKey: ['CREATE_Upvote'],
		mutationFn: async (postId) => await createUpvote(postId),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success('Like Updated');
			} else {
				toast.error(data.message);
			}
		},
	});
};

export const useCreateDownVote = () => {
	return useMutation<any, Error, string>({
		mutationKey: ['CREATE_DOWNVOTE'],
		mutationFn: async (postId) => await createDownVote(postId),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success('Dislike Updated');
			} else {
				toast.error(data.message);
			}
		},
	});
};

export const UseDeletePost = () => {
	return useMutation<any, Error, string>({
		mutationKey: ['DELETE_POST'],
		mutationFn: async (postId) => await deletePost(postId),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
	});
};

export const useUpdatePostStatus = () => {
	return useMutation<any, Error, string>({
		mutationKey: ['UPDATE_POST_STATUS'],
		mutationFn: async (postId) => await updatePostStatus(postId),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
	});
};
