'use server';
import envConfig from '@/config/envConfig';
import axiosInstance from '@/lib/AxiosInstance';
import {revalidateTag} from 'next/cache';
import {FieldValues} from 'react-hook-form';

// *create Comment
export const createComment = async (commentData: FieldValues) => {
	try {
		const {data} = await axiosInstance.post('/comments/create-comment', commentData);

		revalidateTag('comments');

		revalidateTag('posts');
		revalidateTag('my-posts');
		revalidateTag('Single_Post');

		return data;
	} catch (error: any) {
		return error?.data?.message;
		throw new Error('Failed to create comment');
	}
};

//*get Comment Data
export const getAllComment = async () => {
	const fetchOption = {
		next: {
			tags: ['comments'],
		},
	};

	const res = await fetch(`${envConfig.baseApi}/comments`, fetchOption);

	return res.json();
};

// *update Comment
export const updateComment = async (commentData: FieldValues) => {
	try {
		const {data} = await axiosInstance.put(`/comments/${commentData._id}`, commentData);

		revalidateTag('comments');

		revalidateTag('posts');
		revalidateTag('my-posts');
		revalidateTag('Single_Post');

		return data;
	} catch (error) {
		throw new Error('Failed to create comment');
	}
};

// *Delete Comment
export const deleteComment = async (commentId: string): Promise<any> => {
	try {
		const {data} = await axiosInstance.delete(`/comments/${commentId}`);

		revalidateTag('posts');
		revalidateTag('comments');
		revalidateTag('my-posts');
		revalidateTag('Single_Post');

		return data;
	} catch (error) {
		throw new Error('Failed to update vote');
	}
};
