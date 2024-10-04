import AutoModal from '@/components/modal/PremiumModal';
import {Navbar} from '@/components/UI/navbar';

const commonLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<div>
			<div className="relative flex flex-col h-screen">
				<Navbar />
				<main>{children}</main>
				<AutoModal />
			</div>
		</div>
	);
};

export default commonLayout;
