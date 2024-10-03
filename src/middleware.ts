import {NextResponse} from 'next/server';
import {NextRequest} from 'next/server';
import {getCurrentUser} from './services/AuthService';

const AuthRoutes = ['/login', '/register'];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
	USER: [/^\/user/, /^\/profile/],
	ADMIN: [/^\/admin/],
};

export async function middleware(request: NextRequest) {
	const {pathname} = request.nextUrl;

	const user = await getCurrentUser();

	//* Redirect to login if user is not authenticated and route is not public
	if (!user) {
		if (AuthRoutes.includes(pathname)) {
			return NextResponse.next(); //* Allow access to auth routes
		} else {
			return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
		}
	}

	//* Handle role-based routes if user is authenticated
	if (user?.role && roleBasedRoutes[user?.role as Role]) {
		const routes = roleBasedRoutes[user?.role as Role];

		if (routes.some((route) => pathname.match(route))) {
			return NextResponse.next(); //* Allow access if route matches user's role
		}
	}

	//* Redirect to home page if user does not have access to the route
	return NextResponse.redirect(new URL('/', request.url));
}

//* See "Matching Paths" below to learn more
export const config = {
	matcher: [
		'/profile',
		'/profile/:page*',
		'/user',
		'/user/:page*',
		'/admin',
		'/admin/:page*',
		'/login',
		'/register',
	],
};
