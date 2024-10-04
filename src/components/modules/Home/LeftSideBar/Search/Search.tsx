'use client';
import SidebarTitle from '@/components/UI/SidebarTitle';
import useDebounce from '@/hooks/debounce.hook';
import {Input} from '@nextui-org/input';
import {SearchIcon} from 'lucide-react';
import {useRouter, useSearchParams} from 'next/navigation';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';

const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const {register, watch} = useForm();

	const searchTerm = useDebounce(watch('search'));

	useEffect(() => {
		if (searchTerm) {
			const params = new URLSearchParams(searchParams.toString());

			params.set('searchTerm', searchTerm);

			router.push(`/?${params.toString()}`);
		} else {
			router.push('/');
		}
	}, [searchTerm]);

	return (
		<>
			<SidebarTitle title="Seacrh" />

			<form className="ml-3">
				<Input
					{...register('search')}
					aria-label="Search"
					classNames={{
						inputWrapper: 'bg-default-100',
						input: 'text-sm',
					}}
					placeholder="Search Post..."
					size="md"
					startContent={
						<SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400 ml-" />
					}
					type="text"
					variant="bordered"
				/>
			</form>
		</>
	);
};

export default Search;
