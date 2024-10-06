'use server';

import axiosInstance from '@/lib/AxiosInstance';
import {jwtDecode} from 'jwt-decode';
import {cookies} from 'next/headers';
import {FieldValues} from 'react-hook-form';
import {getUser} from '../User/user.service';

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
		const {data} = await axiosInstance.post('/auth/login', userData);

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

		const {data} = await getUser();

		if (decodedToken?.role === data?.role) {
			return {
				_id: data._id,
				name: data.name,
				email: data.email,
				profilePicture: data.profilePicture,
				followers: data.followers || [],
				following: data.following || [],
				role: data.role,
				status: data.status,
				createdAt: data.createdAt,
				updatedAt: data.updatedAt,
			};
		}
	}

	return decodedToken;
};
