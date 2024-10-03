import {z} from 'zod';

export const UserUpadteSchema = z.object({
	name: z.string().min(1, 'Please enter your name!'),
	email: z.string().email('Please enter a valid email address!').min(1, 'Please enter your email!'),
});
