
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';




const CheckoutForm = ({ order }) => {
    const { carPrice, name, email, _id } = order
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const [process, setProcess] = useState(false)
    const [success, setSuccess] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ carPrice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [carPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        setProcess(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message);
            setSuccess("")
        } else {
            setError('')
            console.log(paymentMethod);
        }

        const { paymentIntent, error: intendError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intendError) {
            setError(intendError.message)
            setSuccess("")
        } else {
            setError("")
            setSuccess("success")
            console.log(paymentIntent)
            setProcess(false);

            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }


            const url = `http://localhost:5000/orders/${_id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data));






        }
    };


    return (
        <div>
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
                {process ? <Spinner animation="border" /> : <button type="submit" disabled={!stripe || success}>
                    Pay {carPrice}
                </button>}
            </form>
            {
                error && <Alert variant="danger">{error}</Alert>
            }
            {
                success && <Alert variant="success">{success}</Alert>
            }
        </div>
    );
};

export default CheckoutForm;