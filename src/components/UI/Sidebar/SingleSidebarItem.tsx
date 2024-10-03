import Link from 'next/link';
import {ADMINITEMS} from './SidebarItems/AdminItems';
import {useUser} from '@/context/user.provider';

const SingleSidebarItem = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const {user} = useUser();

	return (
		<ul className="space-y-4 pt-10">
			{ADMINITEMS.map((item) => (
				<li key={item.name}>
					<Link
						className="flex items-center p-3 rounded-lg text-lg hover:bg-gray-700 transition-all"
						href="#"
					>
						<span className="mr-4">{item.icon}</span>
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SingleSidebarItem;
