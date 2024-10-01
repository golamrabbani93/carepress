'use server';
import axiosInstance from '@/lib/AxiosInstance';
import {revalidateTag} from 'next/cache';
import {FieldValues} from 'react-hook-form';

// *create Comment
export const createComment = async (commentData: FieldValues) => {
	try {
		const {data} = await axiosInstance.post('/comments/create-comment', commentData);

		revalidateTag('comments');

		revalidateTag('posts');

		return data;
	} catch (error) {
		throw new Error('Failed to create comment');
	}
};
