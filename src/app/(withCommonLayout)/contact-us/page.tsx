'use client';

import {Button} from '@nextui-org/button';
import {toast} from 'sonner';

const ContactUsPage = () => {
	return (
		<div className=" min-h-screen flex flex-col justify-center items-center py-12">
			<h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">Contact Us</h1>
			<div className="border  shadow-lg rounded-lg w-full max-w-4xl p-8 md:p-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
					<div className="flex flex-col justify-center items-center text-center">
						<span className="text-blue-500 text-6xl mb-4">📧</span>
						<h3 className="text-xl font-semibold text-primary">Email Us</h3>
						<p className="text-gray-400">info@yourcompany.com</p>
					</div>
					<div className="flex flex-col justify-center items-center text-center">
						<span className="text-blue-500 text-6xl mb-4">📞</span>
						<h3 className="text-xl font-semibold text-primary">Call Us</h3>
						<p className="text-gray-400">+123 456 7890</p>
					</div>
				</div>
				<form className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<input
							required
							className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your Name"
							type="text"
						/>
						<input
							className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Your Email"
							required={true}
							type="email"
						/>
					</div>
					<input
						required
						className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Subject"
						type="text"
					/>
					<textarea
						className="w-full p-4 border border-gray-300 rounded-lg h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Your Message"
					/>
					<Button
						className="w-full hover:bg-primary hover:text-white"
						color="primary"
						variant="bordered"
						onPress={() => toast.success('Message sent successfully!')}
					>
						Send Message
					</Button>
				</form>
			</div>
		</div>
	);
};

export default ContactUsPage;
