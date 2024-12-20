import Link from 'next/link';
import {ADMINITEMS} from './SidebarItems/AdminItems';
import {useUser} from '@/context/user.provider';
import {USERITEMS} from './SidebarItems/UserItems';
import {useEffect, useState} from 'react';
import SidebarItemsLoader from '@/components/Loader/SidebarItemsLoader';
import {usePathname} from 'next/navigation';

const SingleSidebarItem = () => {
	const [loading, setLoading] = useState(true);
	const {user} = useUser();
	const role = user?.role;

	const pathname = usePathname();
	const items = role === 'ADMIN' ? ADMINITEMS : USERITEMS;

	useEffect(() => {
		if (user) {
			setLoading(false);
		}
	}, [user]);

	if (loading) {
		return <SidebarItemsLoader />;
	}

	return (
		<ul className="space-y-4 pt-10">
			{items.map((item: any) => (
				<li key={item.name}>
					<Link
						className={`flex items-center p-3 rounded-lg text-lg hover:bg-primary transition-all duration-300 ${
							pathname === item.path && 'bg-primary'
						}`}
						href={item?.path || '/'}
					>
						<span className="mr-4">{item.icon}</span>
						{item?.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default SingleSidebarItem;
