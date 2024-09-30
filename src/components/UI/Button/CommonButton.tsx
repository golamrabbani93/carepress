'use client';
import {Button} from '@nextui-org/button';

import {ReactNode} from 'react';

const CommonButton = ({text, icon}: {text: string; icon: ReactNode}) => {
	return (
		<Button type="submit" color="primary" endContent={icon} variant="bordered">
			{text}
		</Button>
	);
};

export default CommonButton;
