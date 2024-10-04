import Category from './Category/Category';
import FilterSider from './Filter/Filter';
import Search from './Search/Search';

const LeftSidebar = () => {
	return (
		<div className="">
			<Search />
			<div className="mt-10">
				<Category />
			</div>
			<div className="mt-10">
				<FilterSider />
			</div>
		</div>
	);
};

export default LeftSidebar;
