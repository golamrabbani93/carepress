import PostLoader from '@/components/Loader/PostLoader';

const Loader = () => {
	return [...Array(4)].map((_, index) => <PostLoader key={index} />);
};

export default Loader;
