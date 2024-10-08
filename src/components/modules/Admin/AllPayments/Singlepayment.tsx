import {Avatar} from '@nextui-org/avatar';
import {format} from 'date-fns';

const Singlepayment = ({payment}: any) => {
	const formatedDate = format(new Date(payment.createdAt), 'MM/dd/yyyy');

	return (
		<tr key={payment._id} className="">
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
				<div className="w-10 h-10 rounded  overflow-hidden">
					<Avatar
						className="w-full h-full object-cover"
						size="sm"
						src={payment?.userId?.profilePicture}
					/>
				</div>
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
				{payment?.userId?.name}
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
				{payment?.userId?.email}
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">
				{payment?.paymentId}
			</td>
			<td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-400">{formatedDate}</td>
		</tr>
	);
};

export default Singlepayment;
