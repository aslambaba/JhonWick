import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from '../components/stripe/CheckoutForm';

const stripePromise = loadStripe("pk_test_51Hr8RFEAxjBMcLOop6ah7qFNyuJzOjKU12Xu2f986khPIR12WVZ2xlvkKfG2l4ueBIfFGgHcdmd3r2CbLe483Mjk00tDQwG0xw");

export default function Checkout() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

