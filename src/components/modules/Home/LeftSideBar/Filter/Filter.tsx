'use client';

import {useEffect, useState} from 'react';
import {Checkbox} from '@nextui-org/checkbox';
import SidebarTitle from '@/components/UI/SidebarTitle';
import {useRouter, useSearchParams} from 'next/navigation';

const FilterSider = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [selectedFilter, setSelectedFilter] = useState('');

	const handleCheckboxChange = (Filter: string) => {
		if (selectedFilter === Filter) {
			setSelectedFilter('');
		} else {
			setSelectedFilter(Filter);
		}
	};

	useEffect(() => {
		if (selectedFilter) {
			const params = new URLSearchParams(searchParams.toString());

			params.set('sort', selectedFilter);

			router.push(`/?${params.toString()}`);
		} else {
			router.push('/');
		}
	}, [selectedFilter]);

	return (
		<div>
			<SidebarTitle title="Filter" />

			<div className="flex flex-col space-y-2 mt-4 ml-3">
				<Checkbox
					color="primary"
					isSelected={selectedFilter === '-totalUpvotes'}
					onChange={() => handleCheckboxChange('-totalUpvotes')}
				>
					Top Like Post
				</Checkbox>
				<Checkbox
					color="primary"
					isSelected={selectedFilter === '-totalDownvotes'}
					onChange={() => handleCheckboxChange('-totalDownvotes')}
				>
					Top Unlike Post
				</Checkbox>
			</div>
		</div>
	);
};

export default FilterSider;
