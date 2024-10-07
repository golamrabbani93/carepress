'use client';

import {useState} from 'react';
import {useRouter, useSearchParams} from 'next/navigation';
import {Input} from '@nextui-org/input';
import {Button} from '@nextui-org/button';
import {FieldValues} from 'react-hook-form';
import {toast} from 'sonner';

const ResetPassword = () => {
	const searchParams = useSearchParams();
	const token = searchParams.get('token');
	const id = searchParams.get('id');
	const router = useRouter();
	const [newPassword, setNewPassword] = useState('');

	const [message, setMessage] = useState('');

	const handleSubmit = async (e: FieldValues) => {
		e.preventDefault();

		if (!newPassword) {
			setMessage('Please enter a new password');

			return;
		}
		const newData = {
			userId: id,
			newPassword,
		};

		try {
			const res = await fetch('http://localhost:5000/api/auth/reset-password', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: `${token}`,
				},
				body: JSON.stringify(newData),
			});

			const data = await res.json();

			if (res.ok) {
				setMessage('Password reset successful!');
				toast.success('Password reset successful!');
				router.push('/login');
			} else {
				setMessage(data.message || 'Password reset failed');
			}
		} catch (error) {
			setMessage('Something went wrong');
		}
	};

	return (
		<div className="flex justify-center items-center h-screen ">
			{/* Custom Card */}
			<div className="border border-gray-100 shadow-lg rounded-lg p-8 w-full max-w-md">
				<h2 className="text-2xl font-bold text-center mb-5">Reset Password</h2>

				{message && (
					<p
						className={`mb-4 text-center ${message.includes('success') ? 'text-green-500' : 'text-red-500'}`}
					>
						{message}
					</p>
				)}

				{token && id ? (
					<form onSubmit={handleSubmit} className="space-y-4">
						<Input
							fullWidth
							color="primary"
							size="lg"
							placeholder="New Password"
							value={newPassword}
							onChange={(e) => setNewPassword(e.target.value)}
							required
						/>
						<Button type="submit" color="primary" fullWidth>
							Reset Password
						</Button>
					</form>
				) : (
					<p className="text-center text-red-500">Invalid or expired token.</p>
				)}
			</div>
		</div>
	);
};

export default ResetPassword;
