import Container from '@/components/UI/Container';

const Mission = () => {
	return (
		<section className="mb-12">
			<Container>
				<h2 className="text-center text-2xl md:text-4xl font-semibold text-primary mb-8">
					Our Mission
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
					<div className="border border-gray-100 p-6 rounded-lg shadow-lg">
						<span className="text-blue-500 text-4xl mb-4 inline-block">🌟</span>
						<h3 className="text-lg font-semibold mb-2 text-primary">Quality Products</h3>
						<p className="text-gray-600">
							We strive to offer high-quality products that meet the diverse needs of our customers.
						</p>
					</div>
					<div className="border border-gray-100 p-6 rounded-lg shadow-lg">
						<span className="text-blue-500 text-4xl mb-4 inline-block">🌍</span>
						<h3 className="text-lg font-semibold mb-2 text-primary">Sustainability</h3>
						<p className="text-gray-600">
							Our mission is to provide sustainable and eco-friendly solutions.
						</p>
					</div>
					<div className="border border-gray-100 p-6 rounded-lg shadow-lg">
						<span className="text-blue-500 text-4xl mb-4 inline-block">🤝</span>
						<h3 className="text-lg font-semibold mb-2 text-primary">Customer Satisfaction</h3>
						<p className="text-gray-600">
							We are committed to exceeding customer expectations with every interaction.
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Mission;
