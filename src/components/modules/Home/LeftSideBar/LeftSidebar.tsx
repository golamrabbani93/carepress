import Category from './Category/Category';
import Search from './Search/Search';

const LeftSidebar = () => {
	return (
		<div className="">
			<Search />
			<div className="mt-10">
				<Category />
			</div>
		</div>
	);
};

export default LeftSidebar;
