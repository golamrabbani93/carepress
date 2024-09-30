import {IInput, ISelect} from '@/types';
import {Select, SelectItem} from '@nextui-org/select';
import {useFormContext} from 'react-hook-form';

interface Iprops extends IInput {
	options: ISelect[];
}
export const CPSelect = ({name, label, disabled, options, variant = 'bordered'}: Iprops) => {
	const {register} = useFormContext();

	return (
		<Select
			{...register(name)}
			className="min-w-full sm:min-w-[225px]"
			isDisabled={disabled}
			label={label}
			placeholder={`Select A ${label}`}
			variant={variant}
		>
			{options.map((option: ISelect) => (
				<SelectItem key={option.key}>{option.label}</SelectItem>
			))}
		</Select>
	);
};
