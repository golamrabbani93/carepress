// import AutoModal from '@/components/modal/PremiumModal';
import LeftSidebar from '@/components/modules/Home/LeftSideBar/LeftSidebar';
import RightSideBar from '@/components/modules/Home/RightSideBar/RightSideBar';
import Container from '@/components/UI/Container';
import {ReactNode} from 'react';

export default async function layout({children, posts}: {children: ReactNode; posts: ReactNode}) {
	return (
		<Container>
			<div className="lg:grid grid-cols-12 gap-2">
				<div className="col-span-3">
					<LeftSidebar />
				</div>
				<div className="col-span-6">
					{children}
					{posts}
				</div>
				<div className="col-span-3">
					{await RightSideBar()}
					{/* <AutoModal /> */}
				</div>
			</div>
		</Container>
	);
}
