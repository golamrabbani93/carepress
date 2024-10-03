import {Home, ScrollText, UserRoundCheck, Rss} from 'lucide-react';

export const USERITEMS = [
	{name: 'Dashboard', icon: <Home />, path: '/dashboard/user'},
	{name: 'My Posts', icon: <ScrollText />, path: '/dashboard/user/posts'},
	{name: 'My Followers', icon: <UserRoundCheck />, path: '/dashboard/user/followers'},
	{name: 'My Followings', icon: <Rss />, path: '/dashboard/user/following'},
];
