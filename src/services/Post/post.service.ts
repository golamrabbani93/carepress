'use server';

import envConfig from '@/config/envConfig';

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
