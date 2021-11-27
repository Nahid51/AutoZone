import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Alert, Button, CircularProgress } from '@mui/material';

const CheckoutForm = ({ purchase }) => {
    const { _id, customerName, email, productPrice } = purchase;
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState(false);
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        const url = 'https://rocky-springs-54557.herokuapp.com/create-payment-intent';
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ productPrice })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [productPrice])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess(false);
        } else {
            setError('');
        }

        // payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: { name: customerName, email: email },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess(false);
        } else {
            setError('');
            setSuccess(true)
            setProcessing(false);
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            fetch(`https://rocky-springs-54557.herokuapp.com/purchaseorder/${_id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))

        }
    }
    return (
        <div>
            {error && <Alert sx={{ mt: 3, mb: 3 }} severity="error">{error}</Alert>}
            {success && <Alert sx={{ mt: 3, mb: 3 }} severity="success">Your payment processed successfully!</Alert>}
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {processing ? <CircularProgress color="secondary" /> :
                    <Button sx={{ mt: 3 }} type="submit" variant="contained" disabled={!stripe || success}>
                        Pay &#36;{productPrice}
                    </Button>
                }
            </form>
        </div>
    );
};

export default CheckoutForm;