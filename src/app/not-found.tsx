import Link from 'next/link';

const Custom404 = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-6xl font-bold text-red-600">404</h1>
			<h2 className="mt-4 text-3xl font-semibold text-gray-800">Page Not Found</h2>
			<p className="mt-2 text-lg text-gray-600">
				The page you&apos;re looking for doesn&apos;t exist.
			</p>
			<Link
				className="mt-4 text-blue-500 hover:text-blue-700 transition-colors duration-300 underline"
				href="/"
			>
				Go back to Home
			</Link>
		</div>
	);
};

export default Custom404;
