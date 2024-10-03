import Link from 'next/link';
import {ADMINITEMS} from './SidebarItems/AdminItems';
import {useUser} from '@/context/user.provider';
import {USERITEMS} from './SidebarItems/UserItems';

const SingleSidebarItem = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const {user} = useUser();

	return (
		<ul className="space-y-4 pt-10">
			{USERITEMS.map((item) => (
				<li key={item.name}>
					<Link
						className="flex items-center p-3 rounded-lg text-lg hover:bg-primary transition-all"
						href={item?.path || '/'}
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
