import Container from '@/components/UI/Container';

const Team = () => {
	return (
		<Container>
			<section className="text-center mb-16">
				<h2 className="text-2xl md:text-4xl font-semibold text-primary mb-8">Meet the Team</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<div className="border border-gray-100 p-6 rounded-lg shadow-custom-all-around">
						<img
							className="w-24 h-24 rounded-full mx-auto mb-4"
							src="https://bikeist.vercel.app/assets/tes-3-CRUVrh6B.png"
							alt="Team Member"
						/>
						<h3 className="text-lg font-semibold text-primary">John Doe</h3>
						<p className="text-gray-400">CEO & Founder</p>
					</div>
					<div className="border border-gray-100 p-6 rounded-lg shadow-custom-all-around">
						<img
							className="w-24 h-24 rounded-full mx-auto mb-4"
							src="https://bikeist.vercel.app/assets/tes-1-DXgPS_u5.png"
							alt="Team Member"
						/>
						<h3 className="text-lg font-semibold text-primary">John Smith</h3>
						<p className="text-gray-400">CTO</p>
					</div>
					<div className="border border-gray-100 p-6 rounded-lg shadow-custom-all-around">
						<img
							className="w-24 h-24 rounded-full mx-auto mb-4"
							src="https://bikeist.vercel.app/assets/tes-4-CZCJKRML.png"
							alt="Team Member"
						/>
						<h3 className="text-lg font-semibold text-primary">David Jonshon</h3>
						<p className="text-gray-400">Lead Developer</p>
					</div>
				</div>
			</section>
		</Container>
	);
};

export default Team;
