'use client';
import {useEffect, useState} from 'react';
import Singlepayment from './Singlepayment';
import {PaymentLoader} from '@/components/Loader/PaymentLoader';

const ALlPayments = ({payments}: any) => {
	const [loading, setloading] = useState(true);

	useEffect(() => {
		if (payments.success) {
			setloading(false);
		}
	}, [payments]);

	if (loading) {
		return <PaymentLoader />;
	}

	return (
		<div className="overflow-x-auto text-center">
			{payments?.data?.length > 0 ? (
				<table className="min-w-full  border border-gray-200">
					<thead className="text-center">
						<tr>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold  ">Image</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">Name</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">Email</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">
								Transaction ID
							</th>
							<th className="py-2 px-4 border-b border-gray-200  text-sm font-semibold ">
								Pay Date
							</th>
						</tr>
					</thead>
					<tbody>
						{payments?.data?.map((payment: any) => (
							<Singlepayment key={payment._id} payment={payment} />
						))}
					</tbody>
				</table>
			) : (
				<div className="text-center text-primary font-bold">No Users Found</div>
			)}
		</div>
	);
};

export default ALlPayments;
