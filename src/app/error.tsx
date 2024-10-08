'use client';

import {useEffect} from 'react';

export default function Error({error, reset}: {error: Error; reset: () => void}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="flex items-center justify-center min-h-screen p-4">
			<div className="p-6 rounded-lg shadow-md text-center max-w-sm w-full">
				<h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
				<p className="text-sm sm:text-base  mb-6">
					We&apos;re sorry for the inconvenience. Please try again.
				</p>
				<button
					onClick={() => reset()}
					className="bg-primary text-white px-4 py-2 rounded hover:bg-red-400 transition duration-200"
				>
					Try Again
				</button>
			</div>
		</div>
	);
}
