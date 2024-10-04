import UsersList from '@/components/modules/Admin/Users/UsersList';
import DashboardHeader from '@/components/UI/DashboardHeader';
import {getAllUser} from '@/services/User/user.service';

const ManageUsers = async () => {
	try {
		const users = await getAllUser();

		return (
			<div>
				<DashboardHeader text="User details" />
				<div className="mt-10">
					<UsersList users={users} />
				</div>
			</div>
		);
	} catch (error) {
		return <p>Failed to load User. Please try again later.</p>;
	}
};

export default ManageUsers;
