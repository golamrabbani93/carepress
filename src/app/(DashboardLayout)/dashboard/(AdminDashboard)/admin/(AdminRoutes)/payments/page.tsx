import ALlPayments from '@/components/modules/Admin/AllPayments/ALlPayments';
import DashboardHeader from '@/components/UI/DashboardHeader';
import {getAllPayment} from '@/services/Payment/payment.service';

const PaymentHistory = async () => {
	const payments = await getAllPayment();

	return (
		<div>
			<DashboardHeader text="User Payments History" />
			<div className="mt-10">
				<ALlPayments payments={payments} />
			</div>
		</div>
	);
};

export default PaymentHistory;
