import SidebarTitle from '@/components/UI/SidebarTitle';
import {Input} from '@nextui-org/input';
import {SearchIcon} from 'lucide-react';

const Search = () => {
	return (
		<>
			<SidebarTitle title="Seacrh" />

			<Input
				aria-label="Search"
				classNames={{
					inputWrapper: 'bg-default-100',
					input: 'text-sm',
				}}
				placeholder="Search Post..."
				size="md"
				startContent={
					<SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
				}
				type="text"
				variant="bordered"
			/>
		</>
	);
};

export default Search;
