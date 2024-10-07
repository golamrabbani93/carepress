import PaymentModal from '@/components/payment/PaymentModal';

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
				<div className="mt-10">
					<PaymentModal />
				</div>
			</div>
		</>
	);
};

export default LeftSidebar;
