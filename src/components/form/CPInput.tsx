'use client';

import {Input} from '@nextui-org/input';
import {useFormContext} from 'react-hook-form';

interface IProps {
	variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
	size?: 'sm' | 'md' | 'lg';
	required?: boolean;
	type?: string;
	label: string;
	name: string;
	className?: string;
	isReadOnly?: boolean;
}

export default function CPInput({
	className,
	variant = 'flat',
	size = 'md',
	required = false,
	type = 'text',
	label,
	name,
	isReadOnly = false,
}: IProps) {
	const {
		register,
		formState: {errors},
	} = useFormContext();

	return (
		<Input
			{...register(name)}
			className={className}
			errorMessage={errors[name]?.message as string}
			isInvalid={!!errors[name]}
			isReadOnly={isReadOnly}
			label={label}
			required={required}
			size={size}
			type={type}
			variant={variant}
		/>
	);
}
