import {Dispatch, SetStateAction, SVGProps} from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export interface IUser {
	_id: string;
	name: string;
	role: string;
	email: string;
	status: string;
	mobileNumber: string;
	profilePhoto?: string;
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
