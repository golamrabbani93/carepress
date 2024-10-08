import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
} from '@nextui-org/navbar';
import NextLink from 'next/link';
import clsx from 'clsx';
import logo from '../../assets/images/logo.png';
import {siteConfig} from '@/config/site';
import {ThemeSwitch} from '@/components/UI/theme-switch';
import AvatarDropdown from './AvatarDropdown';
import Image from 'next/image';
import Search from '../modules/Home/LeftSideBar/Search/Search';
import CategorySidebar from '../modules/Home/LeftSideBar/Category/Category';
import FilterSider from '../modules/Home/LeftSideBar/Filter/Filter';

import Link from 'next/link';
import {Button} from '@nextui-org/button';
import {LogInIcon} from 'lucide-react';
import {PaymentModal} from '../payment/PaymentModal';

export const Navbar = () => {
	return (
		<NextUINavbar className="" maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="w-[125px] md:w-[200px]" href="/">
						<Image alt="logo" src={logo} />
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-center ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									'hover:text-primary',
									'data-[active=true]:text-primary',
									'transition-all duration-300 font-bold text-xl',
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className="hidden lg:flex basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<AvatarDropdown />
				<div className="lg:flex">
					<PaymentModal />
				</div>
			</NavbarContent>
			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<AvatarDropdown />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{/* "small nav ite, for mobile" */}

				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									'hover:text-primary',
									'data-[active=true]:text-primary',
									'transition-all duration-300 font-bold text-xl',
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
					<div className="flex lg:hidden mt-3">
						<Link href={'/login'}>
							<Button
								className="hover:bg-primary hover:text-white mr-2"
								color="primary"
								size="sm"
								startContent={<LogInIcon />}
								variant="bordered"
							>
								Login
							</Button>
						</Link>
						<PaymentModal />
					</div>
					{/* "left side bar" */}

					<div className="lg:hidden border-t-1 mt-2"> </div>

					<div className="lg:hidden mt-10 pb-4">
						<div>
							<Search />
						</div>
						<div className="mt-10">
							<CategorySidebar />
						</div>
						<div className="mt-10">
							<FilterSider />
						</div>
					</div>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
