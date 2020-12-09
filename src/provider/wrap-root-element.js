import React from 'react'
import { CartProvider } from 'use-shopping-cart'

export function WrapElement({ children }) {
    return (
        <CartProvider
            successUrl="stripe.com"
            cancelUrl="twitter.com/dayhaysoos"
            currency="USD"
            allowedCountries={['US', 'GB', 'CA']}
            billingAddressCollection={true}
        >
            {children}
        </CartProvider>
    )
}
