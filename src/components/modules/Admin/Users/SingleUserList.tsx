'user client';

import {useMakeAdmin, useMakeBlock, useMakefollow, useMakeUnBlock} from '@/hooks/user.hook';
import {IUser} from '@/types';
import {Avatar} from '@nextui-org/avatar';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
import {UserCog, UserMinus, UserPlus, UserX} from 'lucide-react';
const SingleUserList = ({user}: {user: IUser}) => {
	const {isPending} = useMakefollow();

	const {mutate: makeBlock, isPending: isBlockPending} = useMakeBlock();
	const {mutate: makeUnBlock, isPending: isUnBlockPending} = useMakeUnBlock();
	const {mutate: makeAdmin, isPending: isMakeAdminPending} = useMakeAdmin();

	const handleBlock = async (id: string) => {
		makeBlock(id);
	};
	const handleUnBlock = async (id: string) => {
		makeUnBlock(id);
	};

	const handleMakeAdmin = async (id: string) => {
		makeAdmin(id);
	};

	const handleDelete = async (id: string) => {
		console.log(id);
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
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{user.role}</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
				<span
					className={`border px-3 py-1 rounded-md uppercase text-xs ${user.status === 'blocked' ? 'border-red-500' : 'border-green-500'}`}
				>
					{user.status}
				</span>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900 capitalize">
				{user.role === 'ADMIN' ? (
					''
				) : user.status === 'blocked' ? (
					<Button
						startContent={<UserPlus className="w-5 h-5" />}
						size="sm"
						color="danger"
						variant="bordered"
						onClick={() => handleUnBlock(user._id)}
					>
						{isUnBlockPending ? <Spinner color="primary" size="sm" /> : 'Unblock'}
					</Button>
				) : (
					<>
						<Button
							startContent={<UserMinus className="w-5 h-5" />}
							size="sm"
							color="danger"
							variant="bordered"
							onClick={() => handleBlock(user._id)}
						>
							{isBlockPending ? <Spinner color="primary" size="sm" /> : 'Block'}
						</Button>
						{user.role === 'USER' && (
							<Button
								onClick={() => handleMakeAdmin(user._id)}
								size="sm"
								className="mx-2"
								color="success"
								variant="bordered"
								isDisabled={isPending}
								startContent={<UserCog className="w-5 h-5" />}
							>
								{isMakeAdminPending ? <Spinner color="success" size="sm" /> : 'Make Admin'}
							</Button>
						)}
						<Button
							onClick={() => handleDelete(user._id)}
							size="sm"
							color="primary"
							variant="bordered"
							isDisabled={isPending}
							startContent={<UserX className="w-5 h-5" />}
						>
							{isPending ? <Spinner color="danger" size="sm" /> : 'Delete'}
						</Button>
					</>
				)}
			</td>
		</tr>
	);
};

export default SingleUserList;
