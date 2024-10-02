// Import necessary modules
import ProfilePage from '@/components/modules/Profile/Profile/Profile';
import Container from '@/components/UI/Container';
import {Navbar} from '@/components/UI/navbar';
import {getUser} from '@/services/User/user.service';

import {Metadata} from 'next';
import {ReactNode} from 'react';

// Define metadata for the page
export const metadata: Metadata = {
	title: 'Dashboard | User',
	description: 'User Dashboard',
};

// Define layout as a server component
const layout = async ({children}: {children: ReactNode}) => {
	// Fetch user data inside the layout
	const data = await getUser(); // Ensure this function accesses cookies correctly

	return (
		<div>
			<Navbar />
			<Container>
				<div className="">
					<ProfilePage data={data} /> {/* Pass user data as a prop if needed */}
					{/* "Content Area" */}
					<main className="max-w-4xl mx-auto mt-6 px-4">{children}</main>
				</div>
			</Container>
		</div>
	);
};

export default layout;
