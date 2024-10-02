'use server';

import envConfig from '@/config/envConfig';
import axiosInstance from '@/lib/AxiosInstance';
import {revalidateTag} from 'next/cache';
import {headers} from 'next/headers';

// *follow User
export const makeFollow = async (followId: string): Promise<any> => {
	try {
		const {data} = await axiosInstance.put(`/users/follow/${followId}`);

		revalidateTag('posts');
		revalidateTag('usersData');

		return data;
	} catch (error) {
		throw new Error('Failed to Follow');
	}
};
const fetchOption = async () => {
	const cookieStore = headers().get('cookie') || ''; // Access the cookie header
	const accessToken = cookieStore.match(/accessToken=([^;]*)/)?.[1]; // Get the access token from cookies

	return {
		next: {
			tags: ['usersData'],
		},
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}` || '', // Add token to Authorization header
		},
	};
};

// Function to get user data
export const getUser = async (): Promise<any> => {
	const options = await fetchOption(); // Get options with access token
	const res = await fetch(`${envConfig.baseApi}/users/me`, options); // Fetch user data

	if (!res.ok) {
		throw new Error('Failed to fetch user data');
	}

	return res.json(); // Return user data
};
//* user update

export const userUpdate = async (userData: FormData): Promise<any> => {
	try {
		const {data} = await axiosInstance.put('/users/me', userData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		revalidateTag('posts');
		revalidateTag('usersData');

		return data;
	} catch (error) {
		throw new Error('Failed to Update post');
	}
};
