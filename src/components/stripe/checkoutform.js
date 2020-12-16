import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import Style from '../style/cardSection.module.css'
import CardSection from './cardSection';

import { useShoppingCart } from 'use-shopping-cart';


export default function CheckoutForm() {

  
  const {clearCart,totalPrice} = useShoppingCart()
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }


    const ID = await fetch('/.netlify/functions/checkout',
    { method: "post",
      body: parseInt(totalPrice),
  });
    const Data = await ID.json();
    console.log(Data);
    const result = await stripe.confirmCardPayment(Data.client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      console.log("Payment Unverified")
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        console.log('Yahoo');
        clearCart();
        alert('Congratulations - Payment Succesfully Recieved !!')
        window.location.replace("/");
      }
    }
  };

  return (
    <div className={Style.MainCheckoutSec}>
      <h2 className={Style.MainH}>Checkout</h2>
      <form onSubmit={handleSubmit} className={Style.CheckoutForm}>
        <input placeholder="Name" />
        <input placeholder="Email Address" />
        <input placeholder="Phone Number" />
        <input placeholder="Address" className={Style.BottomM}/>
        <CardSection />
        <button disabled={!stripe}>Confirm order</button>
      </form>
    </div>

  );
}
