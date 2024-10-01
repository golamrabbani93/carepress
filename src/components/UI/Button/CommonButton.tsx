'use client';
import {Button} from '@nextui-org/button';

import {ReactNode} from 'react';

const CommonButton = ({text, icon}: {text: string; icon: ReactNode}) => {
	return (
		<Button color="primary" endContent={icon} type="submit" variant="bordered">
			{text}
		</Button>
	);
};

export default CommonButton;
