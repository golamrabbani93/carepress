'use server';
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
		revalidateTag('Single_Post');
		revalidateTag('latest-posts');

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
		revalidateTag('Single_Post');
		revalidateTag('latest-posts');

		return data;
	} catch (error) {
		throw new Error('Failed to create post');
	}
};

//*get Post Data
export const getAllPosts = async (query: any) => {
	try {
		const fetchOption = {
			next: {
				tags: ['posts'],
			},
		};

		const queryString = new URLSearchParams(query).toString();

		const res = await fetch(`http://localhost:5000/api/posts?${queryString}`, fetchOption);

		// Check if the response is successful
		if (!res.ok) {
			// Handle non-200 responses
			const errorText = await res.text();

			throw new Error(`Error: ${res.status} - ${errorText}`);
		}

		// Parse the response as JSON
		const data = await res.json();

		return data;
	} catch (error) {
		throw error; // Optionally re-throw the error to handle it in the calling code
	}
};

export const getMyPosts = async () => {
	const options = await fetchOption();

	const res = await fetch(`http://localhost:5000/api/posts/me`, options);

	return res.json();
};

// *create upvote
export const createUpvote = async (postId: string): Promise<any> => {
	try {
		const {data} = await axiosInstance.put(`/posts/upvote/${postId}`);

		revalidateTag('posts');
		revalidateTag('my-posts');
		revalidateTag('Single_Post');
		revalidateTag('latest-posts');

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
		revalidateTag('Single_Post');
		revalidateTag('latest-posts');

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
		revalidateTag('Single_Post');
		revalidateTag('latest-posts');

		return data;
	} catch (error) {
		throw new Error('Failed to update vote');
	}
};
// *Update Post status
export const updatePostStatus = async (postId: string): Promise<any> => {
	try {
		const {data} = await axiosInstance.put(`/posts/status/${postId}`);

		revalidateTag('posts');
		revalidateTag('comments');
		revalidateTag('my-posts');
		revalidateTag('Single_Post');
		revalidateTag('latest-posts');

		return data;
	} catch (error) {
		throw new Error('Failed to Post status');
	}
};

// *get single post
export const getSinglePost = async (postId: string): Promise<any> => {
	const fetchOption = {
		next: {
			tags: ['Single_Post'],
		},
	};

	try {
		const res = await fetch(`http://localhost:5000/api//posts/${postId}`, fetchOption);

		// Check if the response is successful
		if (!res.ok) {
			// Handle non-200 responses
			const errorText = await res.text();

			throw new Error(`Error: ${res.status} - ${errorText}`);
		}

		// Parse the response as JSON
		const data = await res.json();

		return data;
	} catch (error) {
		throw new Error('Failed to get post');
	}
};
