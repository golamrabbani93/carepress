'use server';
import envConfig from '@/config/envConfig';
import axiosInstance from '@/lib/AxiosInstance';
import {revalidateTag} from 'next/cache';
import {headers} from 'next/headers';

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

const fetchOption = async () => {
	const cookieStore = headers().get('cookie') || ''; // Access the cookie header
	const accessToken = cookieStore.match(/accessToken=([^;]*)/)?.[1]; // Get the access token from cookies

	return {
		next: {
			tags: ['payment'],
		},
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}` || '', // Add token to Authorization header
		},
	};
};

export const getAllPayment = async (): Promise<any> => {
	const options = await fetchOption(); // Get options with access token
	const res = await fetch(`${envConfig.baseApi}/payments`, options); // Fetch user data

	if (!res.ok) {
		throw new Error('Failed to fetch payment data');
	}

	return res.json(); // Return user data
};
