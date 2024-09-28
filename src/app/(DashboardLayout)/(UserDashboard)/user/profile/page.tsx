import {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'Profile | User',
	description: 'User Profile DashBoard',
};

const UserProfile = () => {
	return <div className="h-[220vh]">This is UserProfile</div>;
};

export default UserProfile;
