import {useMakeUnfollow} from '@/hooks/user.hook';
import {IUser} from '@/types';
import {Avatar} from '@nextui-org/avatar';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
const SingleFollowingList = ({user}: {user: IUser}) => {
	const {mutate: unfFollowUser, isPending} = useMakeUnfollow();
	const handleFollow = async (id: string) => {
		await unfFollowUser(id);
	};

	return (
		<tr key={user._id} className="hover:bg-gray-50">
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
				<div className="w-10 h-10 rounded  overflow-hidden">
					<Avatar className="w-full h-full object-cover" size="sm" src={user?.profilePicture} />
				</div>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{user.name}</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{user.email}</td>

			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900 capitalize">
				<Button
					onClick={() => handleFollow(user._id)}
					size="sm"
					color="primary"
					variant="bordered"
					isDisabled={isPending}
				>
					{isPending ? <Spinner color="primary" size="sm" /> : 'Unfollow'}
				</Button>
			</td>
		</tr>
	);
};

export default SingleFollowingList;
