import {useUser} from '@/context/user.provider';
import {useMakefollow, useMakeUnfollow} from '@/hooks/user.hook';
import {IUser} from '@/types';
import {Avatar} from '@nextui-org/avatar';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
const SingleFollowerList = ({user}: {user: IUser}) => {
	const {user: currentUser} = useUser();
	const {mutate: followUser, isPending} = useMakefollow();
	const handleFollow = async (id: string) => {
		await followUser(id);
	};

	// *get follower user list
	const following = currentUser
		? user?.followers.map((following) => following === (currentUser._id as string))
		: [];
	const isFollowing = following.includes(true);

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
				{isFollowing ? (
					<Button size="sm" color="primary" variant="bordered">
						{isPending ? <Spinner color="primary" size="sm" /> : 'Following'}
					</Button>
				) : (
					<Button
						onClick={() => handleFollow(user._id)}
						size="sm"
						color="primary"
						variant="bordered"
						isDisabled={isPending}
					>
						{isPending ? <Spinner color="primary" size="sm" /> : 'Follow Back'}
					</Button>
				)}
			</td>
		</tr>
	);
};

export default SingleFollowerList;
