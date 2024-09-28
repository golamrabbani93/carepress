'use client';
import {Home, LogOut, Menu, X} from 'lucide-react';
import {useState} from 'react';
import {motion} from 'framer-motion';
import SingleSidebarItem from './SingleSidebarItem';
import Link from 'next/link';

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false); //* Control sidebar for mobile

	// *Toggle the sidebar
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{/* "Top Navbar" */}
			<nav className="bg-gray-800 text-white shadow-lg p-4 flex justify-center items-center fixed inset-0 h-20 ">
				{/* "Mobile toggle button" */}
				<div className="lg:hidden">
					<button
						className="text-2xl p-2 mr-6 bg-gray-800 text-white rounded-full"
						onClick={toggleSidebar}
					>
						<Menu />
					</button>
				</div>
				<div className="flex space-x-6 justify-center items-center">
					<Link className="flex items-center text-lg hover:text-gray-300 transition-all" href="/">
						<Home className="mr-2" />
						Home
					</Link>
					<Link
						className="flex items-center text-lg hover:text-red-400 transition-all"
						href="/logout"
					>
						<LogOut className="mr-2" />
						Logout
					</Link>
				</div>
			</nav>
			{/* " Small Device Sidebar" */}
			<motion.div
				animate={{x: isOpen ? 0 : '-100%'}}
				className="bg-gray-800 text-white p-6 fixed top-0 left-0 h-full z-50 lg:static lg:block"
				initial={{x: '-100%'}}
				style={{width: '16rem'}}
				transition={{type: 'tween', duration: 0.3}}
			>
				{/* "Mobile Close Button" */}
				<div className="lg:hidden flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold">Menu</h2>
					<button className="text-white text-3xl" onClick={toggleSidebar}>
						{<X />}
					</button>
				</div>
				{/* "Sidebar Menu Items" */}
				<SingleSidebarItem />
			</motion.div>
			{/*  "large device Sidebar" */}
			<div
				className="hidden bg-gray-800 text-white p-6 fixed top-0 left-0 h-full lg:block"
				style={{width: '16rem'}} //! Width is fixed at 16rem 64 Tailwind units
			>
				<h2 className="text-2xl font-bold">Menu</h2>
				{/* "Sidebar Menu Items" */}
				<SingleSidebarItem />
			</div>
		</>
	);
}
