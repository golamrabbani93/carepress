import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from '@nextui-org/navbar';
import {link as linkStyles} from '@nextui-org/theme';
import NextLink from 'next/link';
import clsx from 'clsx';
import logo from '../../assets/images/logo.png';
import {siteConfig} from '@/config/site';
import {ThemeSwitch} from '@/components/UI/theme-switch';
import AvatarDropdown from './AvatarDropdown';
import Image from 'next/image';

export const Navbar = () => {
	return (
		<NextUINavbar className="bg-white" maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="w-[200px]" href="/">
						<Image alt="logo" src={logo} />
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-center ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									'text-black',
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
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<NextLink
								className={clsx(
									linkStyles({color: 'foreground'}),
									'data-[active=true]:text-primary data-[active=true]:font-medium',
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
