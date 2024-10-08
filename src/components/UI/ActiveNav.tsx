'use client';

import {siteConfig} from '@/config/site';
import {NavbarItem} from '@nextui-org/navbar';
import clsx from 'clsx';
import NextLink from 'next/link';
import {usePathname} from 'next/navigation';

const ActiveNav = () => {
	const pathname = usePathname();

	return siteConfig.navItems.map((item) => (
		<NavbarItem key={item.href} isActive={pathname === item.href}>
			<NextLink
				className={clsx(
					'hover:text-primary',
					`${pathname === item.href && 'text-primary'}`,
					'transition-all duration-300 font-bold text-xl',
				)}
				color="foreground"
				href={item.href}
			>
				{item.label}
			</NextLink>
		</NavbarItem>
	));
};

export default ActiveNav;
