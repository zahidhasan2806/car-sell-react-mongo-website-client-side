import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwViFDfWpg2oNRPb3BzINAvTaWym2YlyEWLxv03aFcCDvNQj2b0neFPv8UAfYOxNsPzLiqNQFBKEGQVtT3GyZKb00tAj8enGL');

const Payment = () => {
    const { orderId } = useParams()
    const [order, setOrder] = useState({})



    useEffect(() => {
        fetch(`https://thawing-dusk-24452.herokuapp.com/orders/${orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div className="d-flex align-items-center justify-content-center my-5">
            <div>

                <h1>Please pay for:{order.carName} </h1>
                <h3>Pay: {order.carPrice} </h3>
                {order?.carPrice && <Elements stripe={stripePromise}>
                    <CheckoutForm
                        order={order}
                    />
                </Elements>}

            </div>
        </div >
    );
};

export default Payment;