import PremiumAvatar from '@/components/PremiumPost/PremiumAvatar';
import {useMakeUnfollow} from '@/hooks/user.hook';
import {IUser} from '@/types';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
const SingleFollowingList = ({user}: {user: IUser}) => {
	const {mutate: unfFollowUser, isPending} = useMakeUnfollow();
	const handleFollow = async (id: string) => {
		await unfFollowUser(id);
	};

	return (
		<tr key={user._id} className="">
			<td className="py-2 px-4 border-b border-gray-200 text-sm">
				<div className="w-10 h-10 rounded  overflow-hidden">
					{/* <Avatar className="w-full h-full object-cover" size="sm" src={user?.profilePicture} /> */}
					<PremiumAvatar
						altText={user?.name}
						imgSrc={user?.profilePicture}
						status={user.status === 'premium'}
					/>
				</div>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm">{user.name}</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm">{user.email}</td>

			<td className="py-2 px-4 border-b border-gray-200 text-sm capitalize">
				<Button
					color="primary"
					isDisabled={isPending}
					size="sm"
					variant="bordered"
					onClick={() => handleFollow(user._id)}
				>
					{isPending ? <Spinner color="primary" size="sm" /> : 'Unfollow'}
				</Button>
			</td>
		</tr>
	);
};

export default SingleFollowingList;
