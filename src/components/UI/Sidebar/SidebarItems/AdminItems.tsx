//* Sidebar menu items for admin users
import {Home, Users, ScrollText, TableOfContents, CircleDollarSign} from 'lucide-react';

export const ADMINITEMS = [
	{name: 'Dashboard', icon: <Home />, path: '/dashboard/admin'},
	{name: 'Manage Users', icon: <Users />, path: '/dashboard/admin/users'},
	{name: 'Manage Posts', icon: <ScrollText />, path: '/dashboard/admin/posts'},
	{name: 'Manage Content', icon: <TableOfContents />, path: '/dashboard/admin/content'},
	{name: 'Payment History', icon: <CircleDollarSign />, path: '/dashboard/admin/payments'},
];
