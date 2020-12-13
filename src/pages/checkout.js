import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from '../components/stripe/CheckoutForm';

const stripePromise = loadStripe(process.env.STRIPE_PUBLISH_KEY);

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <h1>Checkout</h1>
      <CheckoutForm />
    </Elements>
  );
};

