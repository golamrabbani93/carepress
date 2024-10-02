import ProfilePage from '@/components/modules/Profile/Profile/Profile';
import Container from '@/components/UI/Container';
import {Navbar} from '@/components/UI/navbar';

import {Metadata} from 'next';
import {ReactNode} from 'react';
export const metadata: Metadata = {
	title: 'Dashboard | User',
	description: 'User Dashboard',
};

const layout = ({children}: {children: ReactNode}) => {
	return (
		<div>
			<Navbar />
			<Container>
				<div className="">
					<ProfilePage />
					{/* "Content Area" */}

					<main className="max-w-4xl mx-auto mt-6 px-4">{children}</main>
				</div>
			</Container>
		</div>
	);
};

export default layout;
