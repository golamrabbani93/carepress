// * save paymen hook

import {useMutation} from '@tanstack/react-query';
import {toast} from 'sonner';
import {savePayment} from '@/services/Payment/payment.service';

export const useSavePayment = () => {
	return useMutation<any, Error, any>({
		mutationKey: ['SAVE_PAYMENT'],
		mutationFn: async (paymentData) => await savePayment(paymentData),
		onSuccess: (data: {success: any; message: any}) => {
			if (data.success) {
			} else {
				toast.error(data.message);
			}
		},
		onError: (_error) => {
			toast.error('Failed to save payment');
		},
	});
};
