import UsersList from '@/components/modules/Admin/Users/UsersList';
import DashboardHeader from '@/components/UI/DashboardHeader';
import {getAllUser} from '@/services/User/user.service';

const ManageUsers = async () => {
	const users = await getAllUser();

	return (
		<div>
			<DashboardHeader text="User details" />
			<div className="mt-10">
				<UsersList users={users} />
			</div>
		</div>
	);
};

export default ManageUsers;
