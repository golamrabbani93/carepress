'use server';

import envConfig from '@/config/envConfig';
import axiosInstance from '@/lib/AxiosInstance';
import {revalidateTag} from 'next/cache';

// *create post
export const createPost = async (formData: FormData): Promise<any> => {
	try {
		const {data} = await axiosInstance.post('/posts/create-post', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		revalidateTag('posts');

		return data;
	} catch (error) {
		throw new Error('Failed to create post');
	}
};

//*get Post Data
export const getAllPosts = async () => {
	const fetchOption = {
		next: {
			tags: ['posts'],
		},
	};

	const res = await fetch(`${envConfig.baseApi}/posts`, fetchOption);

	return res.json();
};

// *create upvote
export const createUpvote = async (postId: string): Promise<any> => {
	try {
		const {data} = await axiosInstance.put(`/posts/upvote/${postId}`);

		revalidateTag('posts');

		return data;
	} catch (error) {
		console.log('🚀🚀: error', error);
		throw new Error('Failed to create post');
	}
};
