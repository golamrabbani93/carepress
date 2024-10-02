'use server';

import axiosInstance from '@/lib/AxiosInstance';
import {revalidateTag} from 'next/cache';

// *follow User
export const makeFollow = async (followId: string): Promise<any> => {
	try {
		const {data} = await axiosInstance.put(`/users/follow/${followId}`);

		revalidateTag('posts');
		revalidateTag('users');

		return data;
	} catch (error) {
		throw new Error('Failed to Follow');
	}
};

//* Get User
export const getUser = async (): Promise<any> => {
	try {
		const {data} = await axiosInstance.get(`/users/me`);

		return data;
	} catch (error) {
		throw new Error('Failed to get User');
	}
};
