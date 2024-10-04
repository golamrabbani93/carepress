'use client';

import {useEffect, useState} from 'react';
import {Checkbox} from '@nextui-org/checkbox';
import SidebarTitle from '@/components/UI/SidebarTitle';
import {useRouter, useSearchParams} from 'next/navigation';

const CategorySidebar = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [selectedCategory, setSelectedCategory] = useState('');

	const handleCheckboxChange = (category: string) => {
		if (selectedCategory === category) {
			setSelectedCategory('');
		} else {
			setSelectedCategory(category);
		}
	};

	useEffect(() => {
		if (selectedCategory) {
			const params = new URLSearchParams(searchParams.toString());

			params.set('category', selectedCategory);

			router.push(`/?${params.toString()}`);
		} else {
			router.push('/');
		}
	}, [selectedCategory]);

	return (
		<div>
			<SidebarTitle title="Category" />

			<div className="flex flex-col space-y-2 mt-4 ml-3">
				<Checkbox
					color="primary"
					isSelected={selectedCategory === 'Tip'}
					onChange={() => handleCheckboxChange('Tip')}
				>
					Pets Tips
				</Checkbox>
				<Checkbox
					color="primary"
					isSelected={selectedCategory === 'Story'}
					onChange={() => handleCheckboxChange('Story')}
				>
					Pets Story
				</Checkbox>
			</div>
		</div>
	);
};

export default CategorySidebar;
