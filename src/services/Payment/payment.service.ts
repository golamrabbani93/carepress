'use server';
import axiosInstance from '@/lib/AxiosInstance';
import {revalidateTag} from 'next/cache';

// * save payment

export const savePayment = async (paymentData: any): Promise<any> => {
	try {
		const {data} = await axiosInstance.post('/payments/create-payment', paymentData);

		revalidateTag('payment');
		revalidateTag('posts');
		revalidateTag('usersData');
		revalidateTag('my-posts');
		revalidateTag('Single_Post');

		return data;
	} catch (error) {
		throw new Error('Failed to save payment');
	}
};
