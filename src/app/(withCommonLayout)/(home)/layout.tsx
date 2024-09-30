import LeftSidebar from '@/components/modules/Home/LeftSideBar/LeftSidebar';
import RightSideBar from '@/components/modules/Home/RightSideBar/RightSideBar';
import Container from '@/components/UI/Container';
import {ReactNode} from 'react';

export default function layout({children}: {children: ReactNode}) {
	return (
		<Container>
			<div className="grid grid-cols-12 gap-2">
				<div className="col-span-3">
					<LeftSidebar />
				</div>
				<div className="col-span-6 bg-secondary">{children}</div>
				<div className="col-span-3">
					<RightSideBar />
				</div>
			</div>
		</Container>
	);
}
