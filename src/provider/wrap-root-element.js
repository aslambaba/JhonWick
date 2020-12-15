import React from 'react'
import { CartProvider } from 'use-shopping-cart'
import { loadStripe } from '@stripe/stripe-js';

export const wrapPageElement = ({ element })=> {
    const stripePromise = loadStripe('pk_test_51Hwv4MJxGPfhLM6w6JRJeKbZ16DYxUTTrpLaKDrNgvDcN2wPTSc7vyhjXZR7AUxGxPE5bJw57SgptfwIuKvlrd7f00LI9gvKmS');    
    return (
        <CartProvider
        stripe={stripePromise}
            successUrl="stripe.com"
            cancelUrl="twitter.com/dayhaysoos"
            currency="USD"
            allowedCountries={['US', 'GB', 'CA']}
            billingAddressCollection={true}
        >
            {element}
        </CartProvider>
    )
}
