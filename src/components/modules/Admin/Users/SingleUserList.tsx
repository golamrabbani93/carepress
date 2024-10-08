'user client';

import {useDeleteUser, useMakeAdmin, useMakeBlock, useMakeUnBlock} from '@/hooks/user.hook';
import {IUser} from '@/types';
import {Avatar} from '@nextui-org/avatar';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
import {UserCog, UserMinus, UserPlus, UserX} from 'lucide-react';
const SingleUserList = ({user}: {user: IUser}) => {
	const {mutate: makeBlock, isPending: isBlockPending} = useMakeBlock();
	const {mutate: makeUnBlock, isPending: isUnBlockPending} = useMakeUnBlock();
	const {mutate: makeAdmin, isPending: isMakeAdminPending} = useMakeAdmin();
	const {mutate: deleteUser, isPending: isDeletePending} = useDeleteUser();

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
		deleteUser(id);
	};

	return (
		<tr key={user._id} className="">
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
				<div className="w-10 h-10 rounded  overflow-hidden">
					<Avatar className="w-full h-full object-cover" size="sm" src={user?.profilePicture} />
				</div>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">{user.name}</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">{user.email}</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
				<span
					className={` px-3 py-1 rounded-md uppercase text-xs border-2 ${user.role === 'ADMIN' ? 'border-sky-500' : 'border-purple-500'}`}
				>
					{user.role}
				</span>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
				<span
					className={` px-3 py-1 rounded-md uppercase text-xs border-2 ${user.status === 'blocked' ? 'border-red-500' : user.status === 'premium' ? 'border-green-500' : 'border-yellow-500'}`}
				>
					{user.status}
				</span>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400 capitalize">
				{user.role === 'ADMIN' ? (
					''
				) : user.status === 'blocked' ? (
					<Button
						className="my-2"
						color="danger"
						size="sm"
						startContent={<UserPlus className="w-5 h-5" />}
						variant="bordered"
						onClick={() => handleUnBlock(user._id)}
					>
						{isUnBlockPending ? <Spinner color="primary" size="sm" /> : 'Unblock'}
					</Button>
				) : (
					<>
						<Button
							className="my-2"
							color="danger"
							size="sm"
							startContent={<UserMinus className="w-5 h-5" />}
							variant="bordered"
							onClick={() => handleBlock(user._id)}
						>
							{isBlockPending ? <Spinner color="primary" size="sm" /> : 'Block'}
						</Button>
						{user.role === 'USER' && (
							<Button
								className="mx-2 mb-2"
								color="success"
								isDisabled={isMakeAdminPending}
								size="sm"
								startContent={<UserCog className="w-5 h-5" />}
								variant="bordered"
								onClick={() => handleMakeAdmin(user._id)}
							>
								{isMakeAdminPending ? <Spinner color="success" size="sm" /> : 'Make Admin'}
							</Button>
						)}
						<Button
							color="primary"
							isDisabled={isDeletePending}
							size="sm"
							startContent={<UserX className="w-5 h-5" />}
							variant="bordered"
							onClick={() => handleDelete(user._id)}
						>
							{isDeletePending ? <Spinner color="danger" size="sm" /> : 'Delete'}
						</Button>
					</>
				)}
			</td>
		</tr>
	);
};

export default SingleUserList;
