import {createComment, updateComment} from '@/services/Comment/comment.service';
import {useMutation} from '@tanstack/react-query';
import {FieldValues} from 'react-hook-form';
import {toast} from 'sonner';

export const useCreateComment = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ['CREATE_COMMENT'],
		mutationFn: async (postData) => await createComment(postData),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
	});
};
export const useUpadateComment = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ['UPDATE_COMMENT'],
		mutationFn: async (commentData) => await updateComment(commentData),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
	});
};
