import {IInput} from '@/types';

import {DatePicker} from '@nextui-org/date-picker';

import {Controller} from 'react-hook-form';

interface IProps extends IInput {}
const FXDatePicker = ({name, label, variant = 'bordered'}: IProps) => {
	return (
		<Controller
			name={name}
			render={({field: {...fields}}) => (
				<DatePicker
					className="min-w-full sm:min-w-[225px]"
					label={label}
					variant={variant}
					{...fields}
					// defaultValue={'9'}
				/>
			)}
		/>
	);
};

export default FXDatePicker;
