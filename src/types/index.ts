import {Dispatch, SetStateAction, SVGProps} from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export interface IUser {
	_id: string;
	name: string;
	email: string;
	profilePicture: string;
	followers: any[];
	following: any[];
	role: string;
	status: string;
	createdAt?: string;
	updatedAt?: string;
	__v?: number;
}

//* UserContext Types
export interface IUserProviderValues {
	user: IUser | null;
	isLoading: boolean;
	setUser: (user: IUser | null) => void;
	setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IInput {
	variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
	size?: 'sm' | 'md' | 'lg';
	required?: boolean;
	type?: string;
	label: string;
	name: string;
	disabled?: boolean;
}

export interface ISelect {
	key: string;
	label: string;
}

export interface IPost {
	_id: string;
	title: string;
	content: string;
	images: string[];
	author: IUser;
	upvotes: IUser[];
	downvotes: IUser[];
	category: string;
	comments: any[];
	isPremium: boolean;
	premiumPrice: number;
	createdAt: string;
	updatedAt: string;
}

export interface IComment {
	_id: string;
	post: string;
	author: IUser;
	content: string;
	replies: any[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}
