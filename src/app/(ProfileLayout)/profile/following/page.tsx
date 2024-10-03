import FollowingList from '@/components/modules/Following/FollowingList';
import {getUser} from '@/services/User/user.service';

const FollowerPage = async () => {
	const users = await getUser();

	return (
		<div className="pb-10">
			<FollowingList users={users} />
		</div>
	);
};

export default FollowerPage;
