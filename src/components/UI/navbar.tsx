import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import NextLink from 'next/link';
import clsx from 'clsx';
import logo from '../../assets/images/logo.png';
import {siteConfig} from '@/config/site';
import {ThemeSwitch} from '@/components/UI/theme-switch';
import AvatarDropdown from './AvatarDropdown';
import Image from 'next/image';
import RightSideBar from '../modules/Home/RightSideBar/RightSideBar';
import Search from '../modules/Home/LeftSideBar/Search/Search';
import CategorySidebar from '../modules/Home/LeftSideBar/Category/Category';
import FilterSider from '../modules/Home/LeftSideBar/Filter/Filter';
import LatestPosts from '../modules/Home/RightSideBar/LatestPosts/LatestPosts';

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

			<NavbarContent className="hidden sm:flex basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<AvatarDropdown />
			</NavbarContent>
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
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

					{/* "left side bar" */}

					<div className="md:hidden">
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
