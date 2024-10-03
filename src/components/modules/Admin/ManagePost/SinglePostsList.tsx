'user client';

import {useMakeBlock, useMakefollow, useMakeUnBlock} from '@/hooks/user.hook';
import {IPost} from '@/types';
import {Avatar} from '@nextui-org/avatar';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
import {FileMinus, FilePlus, UserMinus, UserPlus} from 'lucide-react';
const SinglePostList = ({post}: {post: IPost}) => {
	const {isPending} = useMakefollow();

	const {mutate: makeBlock, isPending: isBlockPending} = useMakeBlock();
	const {mutate: makeUnBlock, isPending: isUnBlockPending} = useMakeUnBlock();

	const handleBlock = async (id: string) => {
		makeBlock(id);
	};

	return (
		<tr key={post._id} className="hover:bg-gray-50">
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
				<div className="w-10 h-10  overflow-hidden">
					{post.images.map((image, index) => {
						return (
							<Avatar
								key={index}
								alt={post.title}
								className="inline-block rounded-md"
								radius="none"
								size="md"
								src={image}
							/>
						);
					})}
				</div>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">{post.title}</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
				{post.author.name}
			</td>

			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900">
				<span
					className={`border px-3 py-1 rounded-md uppercase text-xs ${!post.status ? 'border-red-500' : 'border-green-500'}`}
				>
					{post.status ? 'Published' : 'Draft'}
				</span>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-900 capitalize">
				{post.status ? (
					<Button
						color="success"
						size="sm"
						startContent={<FilePlus className="w-5 h-5" />}
						variant="bordered"
						onClick={() => ''}
					>
						{isUnBlockPending ? <Spinner color="success" size="sm" /> : 'Make Publish'}
					</Button>
				) : (
					<Button
						color="danger"
						size="sm"
						startContent={<FileMinus className="w-5 h-5" />}
						variant="bordered"
						onClick={() => ''}
					>
						{isBlockPending ? <Spinner color="primary" size="sm" /> : 'Make Draft'}
					</Button>
				)}
			</td>
		</tr>
	);
};

export default SinglePostList;
