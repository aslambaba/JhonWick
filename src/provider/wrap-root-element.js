import React from 'react'
import { CartProvider } from 'use-shopping-cart'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51Hr8RFEAxjBMcLOop6ah7qFNyuJzOjKU12Xu2f986khPIR12WVZ2xlvkKfG2l4ueBIfFGgHcdmd3r2CbLe483Mjk00tDQwG0xw');

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
