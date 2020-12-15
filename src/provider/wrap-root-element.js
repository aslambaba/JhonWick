import React from 'react'
import { CartProvider } from 'use-shopping-cart'
import { loadStripe } from '@stripe/stripe-js'
const dotenv = require('dotenv');
dotenv.config();
const stripePromise = loadStripe(React.App.process.env.STRIPE_PUBLISH_KEY);

export const wrapPageElement = ({ element })=> {
    
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
