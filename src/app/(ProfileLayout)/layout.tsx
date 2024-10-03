import ProfilePage from '@/components/modules/Profile/Profile/Profile';
import Container from '@/components/UI/Container';
import {Navbar} from '@/components/UI/navbar';

import {Metadata} from 'next';
import {Children, ReactNode} from 'react';
export const metadata: Metadata = {
	title: 'Dashboard | User',
	description: 'User Dashboard',
};

const layout = ({children}: {children: ReactNode}) => {
	return <div>{children}</div>;
};

export default layout;
