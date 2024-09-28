import {Navbar} from '@/components/UI/navbar';

const commonLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<div>
			<div className="relative flex flex-col h-screen">
				<Navbar />
				<main>{children}</main>
			</div>
		</div>
	);
};

export default commonLayout;
