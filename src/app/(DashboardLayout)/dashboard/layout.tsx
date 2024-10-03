import Sidebar from '@/components/UI/Sidebar/Sidebar';
import {Metadata} from 'next';
import {ReactNode} from 'react';
export const metadata: Metadata = {
	title: 'Dashboard | User',
	description: 'User Dashboard',
};

const layout = ({children}: {children: ReactNode}) => {
	return (
		<div className="flex h-screen ">
			{/* "Sidebar" */}
			<Sidebar />
			{/* "Content Area" */}
			<main className="flex-1 p-6 ">
				<div className="mt-[100px]">{children}</div>
			</main>
		</div>
	);
};

export default layout;
