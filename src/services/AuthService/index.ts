'use server';

import axiosInstance from '@/lib/AxiosInstance';
import {jwtDecode} from 'jwt-decode';
import {cookies} from 'next/headers';
import {FieldValues} from 'react-hook-form';

//* Register A User
export const registerUser = async (userData: FieldValues) => {
	try {
		const {data} = await axiosInstance.post('/auth/signup', userData);

		if (data.success) {
			cookies().set('accessToken', data?.data?.accessToken);
			cookies().set('refreshToken', data?.data?.refreshToken);
		}

		return data;
	} catch (error: any) {
		throw new Error(error);
	}
};

// * Login A User
export const loginUser = async (userData: FieldValues) => {
	try {
		const {data} = await axiosInstance.post('/auth/login', userData);

		if (data.success) {
			cookies().set('accessToken', data?.data?.accessToken);
			cookies().set('refreshToken', data?.data?.refreshToken);
		}

		return data;
	} catch (error: any) {
		return error.response.data;
	}
};

//* Logout A user
export const logout = () => {
	cookies().delete('accessToken');
	cookies().delete('refreshToken');
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
			mobileNumber: decodedToken.mobileNumber,
			role: decodedToken.role,
			status: decodedToken.status,
			profilePhoto: decodedToken.profilePhoto,
		};
	}

	return decodedToken;
};
