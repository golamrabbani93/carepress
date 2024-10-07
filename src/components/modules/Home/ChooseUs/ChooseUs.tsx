import Container from '@/components/UI/Container';

const ChooseUs = () => {
	return (
		<section className="mb-12">
			<Container>
				<h2 className="text-center text-2xl md:text-4xl font-semibold text-primary mb-8">
					Why Choose Us?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
					<div className="border border-gray-100 p-6 rounded-lg shadow-custom-all-around">
						<span className="text-blue-500 text-4xl mb-4 inline-block">🚀</span>
						<h3 className="text-lg font-semibold mb-2 text-primary">Commitment to Excellence</h3>
						<p className="text-gray-600">
							We offer high-quality products/services tailored to your needs.
						</p>
					</div>
					<div className="border border-gray-100 p-6 rounded-lg shadow-custom-all-around">
						<span className="text-blue-500 text-4xl mb-4 inline-block">💡</span>
						<h3 className="text-lg font-semibold mb-2 text-primary">Innovation-Driven</h3>
						<p className="text-gray-600">We continuously innovate to stay ahead in our field.</p>
					</div>
					<div className="border border-gray-100 p-6 rounded-lg shadow-custom-all-around">
						<span className="text-blue-500 text-4xl mb-4 inline-block">💼</span>
						<h3 className="text-lg font-semibold mb-2 text-primary">Customer-Centric</h3>
						<p className="text-gray-600">
							Your satisfaction is our top priority, and we support you at every step.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default ChooseUs;
