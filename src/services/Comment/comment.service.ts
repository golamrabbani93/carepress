'use server';
import axiosInstance from '@/lib/AxiosInstance';
import {revalidateTag} from 'next/cache';
import {FieldValues} from 'react-hook-form';
import {json} from 'stream/consumers';

// *create Comment
export const createComment = async (data: FieldValues) => {
	try {
		const response = await axiosInstance.post('/comments/create-comment', data);
		return response.data;
	} catch (error) {
		throw new Error('Failed to create comment');
	}
};
