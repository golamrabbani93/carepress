'use client';
import {Button} from '@nextui-org/button';
import {LogInIcon} from 'lucide-react';

const CommonButton = (text: string) => {
	return (
		<Button color="primary" startContent={<LogInIcon />} variant="bordered">
			{text}
		</Button>
	);
};

export default CommonButton;
