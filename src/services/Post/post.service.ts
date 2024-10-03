'use server';

import envConfig from '@/config/envConfig';
import axiosInstance from '@/lib/AxiosInstance';
import {revalidateTag} from 'next/cache';
import {headers} from 'next/headers';

const fetchOption = async () => {
	const cookieStore = headers().get('cookie') || ''; // Access the cookie header
	const accessToken = cookieStore.match(/accessToken=([^;]*)/)?.[1]; // Get the access token from cookies

	return {
		next: {
			tags: ['my-posts'],
		},
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}` || '', // Add token to Authorization header
		},
	};
};

// *create post
export const createPost = async (formData: FormData): Promise<any> => {
	try {
		const {data} = await axiosInstance.post('/posts/create-post', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		revalidateTag('posts');
		revalidateTag('my-posts');

		return data;
	} catch (error) {
		throw new Error('Failed to create post');
	}
};

// *update post
export const updatePost = async (postId: string, formData: FormData): Promise<any> => {
	try {
		const {data} = await axiosInstance.put(`/posts/${postId}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		});

		revalidateTag('posts');
		revalidateTag('my-posts');

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

export const getMyPosts = async () => {
	const options = await fetchOption();

	const res = await fetch(`${envConfig.baseApi}/posts/me`, options);

	return res.json();
};

// *create upvote
export const createUpvote = async (postId: string): Promise<any> => {
	try {
		const {data} = await axiosInstance.put(`/posts/upvote/${postId}`);

		revalidateTag('posts');
		revalidateTag('my-posts');

		return data;
	} catch (error) {
		throw new Error('Failed to update vote');
	}
};

// *create downvote
export const createDownVote = async (postId: string): Promise<any> => {
	try {
		const {data} = await axiosInstance.put(`/posts/downvote/${postId}`);

		revalidateTag('posts');
		revalidateTag('my-posts');

		return data;
	} catch (error) {
		throw new Error('Failed to update vote');
	}
};

// *Delete Post
export const deletePost = async (postId: string): Promise<any> => {
	try {
		const {data} = await axiosInstance.delete(`/posts/${postId}`);

		revalidateTag('posts');
		revalidateTag('comments');
		revalidateTag('my-posts');

		return data;
	} catch (error) {
		throw new Error('Failed to update vote');
	}
};
