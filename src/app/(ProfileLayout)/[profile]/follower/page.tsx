import FollowerList from '@/components/modules/Follower/FollowerList';
import {getUser} from '@/services/User/user.service';

const FollowerPage = async () => {
	const users = await getUser();

	return (
		<div>
			<FollowerList users={users} />
		</div>
	);
};

export default FollowerPage;
