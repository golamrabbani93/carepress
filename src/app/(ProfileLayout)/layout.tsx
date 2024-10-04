
import {Metadata} from 'next';
import { ReactNode} from 'react';
export const metadata: Metadata = {
	title: 'Dashboard | User',
	description: 'User Dashboard',
};

const layout = ({children}: {children: ReactNode}) => {
	return <div>{children}</div>;
};

export default layout;
