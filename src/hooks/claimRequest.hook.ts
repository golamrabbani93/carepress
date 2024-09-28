import {addClaimRequest} from '@/services/ClaimRequest';
import {useMutation} from '@tanstack/react-query';
import {FieldValues} from 'react-hook-form';

import {toast} from 'sonner';

export const useAddClaimRequest = () => {
	return useMutation<any, Error, FieldValues>({
		mutationKey: ['ADD_CLAIM_REQUEST'],
		mutationFn: async (postData) => await addClaimRequest(postData),
		onSuccess: (data) => {
			if (data.success) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
		},
	});
};
