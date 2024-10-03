'user client';

import {useMakefollow} from '@/hooks/user.hook';
import {IUser} from '@/types';
import {Avatar} from '@nextui-org/avatar';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
import {UserCog, UserMinus, UserX} from 'lucide-react';
const SingleUserList = ({user}: {user: IUser}) => {
	const {isPending} = useMakefollow();

	const handleBlock = async (id: string) => {
		console.log(id);
	};

	const handleMakeAdmin = async (id: string) => {
		console.log(id);
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
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">status</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900 capitalize">
				<Button
					startContent={<UserMinus className="w-5 h-5" />}
					size="sm"
					color="danger"
					variant="bordered"
					onClick={() => handleBlock(user._id)}
				>
					{isPending ? <Spinner color="primary" size="sm" /> : 'Block'}
				</Button>

				<Button
					onClick={() => handleMakeAdmin(user._id)}
					size="sm"
					className="mx-2"
					color="success"
					variant="bordered"
					isDisabled={isPending}
					startContent={<UserCog className="w-5 h-5" />}
				>
					{isPending ? <Spinner color="success" size="sm" /> : 'Make Admin'}
				</Button>
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
			</td>
		</tr>
	);
};

export default SingleUserList;
