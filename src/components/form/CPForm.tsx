'use client';

import {ReactNode, useEffect} from 'react';
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';

interface formConfig {
	defaultValues?: Record<string, any>;
	resolver?: any;
}

interface IProps extends formConfig {
	children: ReactNode;
	onSubmit: SubmitHandler<any>;
}

export default function CPForm({children, onSubmit, defaultValues, resolver}: IProps) {
	// Initialize the form with resolver and default values
	const methods = useForm({
		defaultValues,
		resolver,
	});

	// Reset form whenever defaultValues changes
	useEffect(() => {
		if (defaultValues) {
			methods.reset(defaultValues); // Reset with new default values
		}
	}, [defaultValues, methods]);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
		</FormProvider>
	);
}
