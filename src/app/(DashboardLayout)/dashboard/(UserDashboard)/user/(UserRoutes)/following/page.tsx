import FollowingList from '@/components/modules/Following/FollowingList';
import {getUser} from '@/services/Payment/payment.service';

const DashboardFollowingPage = async () => {
	const users = await getUser();

	return (
		<div className="pb-10">
			<FollowingList users={users} />
		</div>
	);
};

export default DashboardFollowingPage;
