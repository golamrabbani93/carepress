'use server';

import axiosInstance from '@/lib/AxiosInstance';
import {jwtDecode} from 'jwt-decode';
import {cookies} from 'next/headers';
import {FieldValues} from 'react-hook-form';

//* Register A User
export const registerUser = async (userData: FieldValues) => {
	try {
		const {data} = await axiosInstance.post('/auth/signup', userData);

		return data;
	} catch (error: any) {
		return error.response.data;
	}
};

// * Login A User
export const loginUser = async (userData: FieldValues) => {
	try {
		const {data} = await axiosInstance.post('/api/auth/login', userData);

		if (data.success) {
			cookies().set('accessToken', data?.token);
		}

		return data;
	} catch (error: any) {
		return error.response.data;
	}
};

//* Logout A user
export const logout = () => {
	cookies().delete('accessToken');
};

// *get Current USer Data

export const getCurrentUser = async () => {
	const accessToken = cookies().get('accessToken')?.value;

	let decodedToken = null;

	if (accessToken) {
		decodedToken = await jwtDecode(accessToken);

		return {
			_id: decodedToken._id,
			name: decodedToken.name,
			email: decodedToken.email,
			profilePicture: decodedToken.profilePicture,
			followers: decodedToken.followers || [],
			following: decodedToken.following || [],
			role: decodedToken.role,
			createdAt: decodedToken.createdAt,
			updatedAt: decodedToken.updatedAt,
		};
	}

	return decodedToken;
};
