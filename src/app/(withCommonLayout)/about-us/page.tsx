import Team from '@/components/modules/Home/AboutUs/Team/Team';
import ChooseUs from '@/components/modules/Home/ChooseUs/ChooseUs';
import Mission from '@/components/modules/Home/Mission/Mission';

const AboutUsPage = () => {
	return (
		<section className="text-center mb-12 mt-10">
			<h1 className="text-3xl md:text-5xl font-bold  mb-6 uppercase">About Us</h1>

			<Team />

			<ChooseUs />

			<Mission />
		</section>
	);
};

export default AboutUsPage;
