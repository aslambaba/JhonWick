import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/stripe/checkoutForm';

const stripePromise = loadStripe('pk_test_51Hwv4MJxGPfhLM6w6JRJeKbZ16DYxUTTrpLaKDrNgvDcN2wPTSc7vyhjXZR7AUxGxPE5bJw57SgptfwIuKvlrd7f00LI9gvKmS');
export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

