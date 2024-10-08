import FilterSider from './Filter/Filter';
import Search from './Search/Search';
import CategorySidebar from './Category/Category';

const LeftSidebar = () => {
	return (
		<>
			<div className="hidden lg:block">
				<div>
					<Search />
				</div>
				<div className="mt-10">
					<CategorySidebar />
				</div>
				<div className="mt-10">
					<FilterSider />
				</div>
			</div>
		</>
	);
};

export default LeftSidebar;
