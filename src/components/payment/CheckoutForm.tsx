/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {useUser} from '@/context/user.provider';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import {useEffect, useState} from 'react';
import {FieldValues, SubmitHandler} from 'react-hook-form';
import {Spinner} from '@nextui-org/spinner';
import {toast} from 'sonner';
import {Button} from '@nextui-org/button';

type TProps = {
	amount: number;
};
const CheckoutForm: React.FC<TProps> = ({amount}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, SetCardError] = useState('');

	const [processing, setProcessing] = useState(false);
	// * get Payment Secret
	const [clientSecret, setClientSecret] = useState('');
	const {user} = useUser();

	useEffect(() => {
		const createPaymentIntent = async () => {
			try {
				const res = await fetch('http://localhost:5000/api/payments/create-payment-intent', {
					method: 'POST',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({price: amount}),
				});

				const {data} = await res.json();

				setClientSecret(data);
			} catch (error) {}
		};

		if (amount) {
			createPaymentIntent();
		}
	}, [amount]);

	const handleSubmit: SubmitHandler<FieldValues> = async (event) => {
		setProcessing(true);
		// Block native form submission.
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const card = elements.getElement(CardElement);

		if (card == null) {
			return;
		}

		// Use your card Element with other Stripe.js APIs
		const {error} = await stripe.createPaymentMethod({
			type: 'card',
			card,
		});

		if (error) {
			SetCardError(error.message as string);
		} else {
			SetCardError('');
		}
		const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: card,
				billing_details: {
					name: user?._id,
					email: user?.email,
				},
			},
		});

		if (confirmError) {
			toast.error('Payment Failed');
		} else {
			if (paymentIntent.status === 'succeeded') {
				const toastId = toast.loading('Payment Processing...');

				setTimeout(() => {
					toast.success('Payment Success', {id: toastId});
				}, 2000);
			}
		}
		setProcessing(false);
	};

	return (
		<div className="w-[400px]">
			<h2 className=" text-white p-4 text-xl font-bold uppercase mb-5">Payment with Card</h2>
			<form onSubmit={handleSubmit}>
				<CardElement
					className="border p-4"
					options={{
						style: {
							base: {
								fontSize: '16px',
								color: '#fff',
								'::placeholder': {
									color: '#fff',
								},
							},
							invalid: {
								color: '#9e2146',
							},
						},
					}}
				/>

				<Button
					disabled={!stripe || !clientSecret}
					type="submit"
					variant="bordered"
					color="primary"
					className="mt-8 px-6 py-3 text-white font-bold uppercase rounded-lg  transition duration-300"
				>
					{processing ? <Spinner color={'white'} size="sm" /> : `Pay $${amount}`}
				</Button>
			</form>
			{cardError && <p className="text-red-500 mt-2">{cardError}</p>}
		</div>
	);
};

export default CheckoutForm;
