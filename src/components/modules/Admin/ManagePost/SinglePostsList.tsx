'user client';

import {useUpdatePostStatus} from '@/hooks/post.hook';
import {IPost} from '@/types';
import {Avatar} from '@nextui-org/avatar';
import {Button} from '@nextui-org/button';
import {Spinner} from '@nextui-org/spinner';
import {FileMinus, FilePlus} from 'lucide-react';
const SinglePostList = ({post}: {post: IPost}) => {
	const {mutate: postStatus, isPending} = useUpdatePostStatus();

	const handlePostStatus = async (id: string) => {
		postStatus(id);
	};

	return (
		<tr key={post._id} className="">
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
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
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">{post.title}</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
				{post.author.name}
			</td>

			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
				<span
					className={`border px-3 py-1 rounded-md uppercase text-xs ${!post.status ? 'border-red-500' : 'border-green-500'}`}
				>
					{post.status ? 'Published' : 'Draft'}
				</span>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400 capitalize">
				{!post.status ? (
					<Button
						color="success"
						size="sm"
						startContent={<FilePlus className="w-5 h-5" />}
						variant="bordered"
						onClick={() => handlePostStatus(post._id)}
					>
						{isPending ? <Spinner color="success" size="sm" /> : 'Make Publish'}
					</Button>
				) : (
					<Button
						color="danger"
						size="sm"
						startContent={<FileMinus className="w-5 h-5" />}
						variant="bordered"
						onClick={() => handlePostStatus(post._id)}
					>
						{isPending ? <Spinner color="danger" size="sm" /> : 'Make Draft'}
					</Button>
				)}
			</td>
		</tr>
	);
};

export default SinglePostList;
