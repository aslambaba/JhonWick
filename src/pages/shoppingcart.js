import React from 'react';
import { useShoppingCart } from 'use-shopping-cart'
import Header from '../components/header';
import CartDetails from '../components/cartdetails';

function ShoppingCart(){
    
  const { cartDetails, clearCart, removeItem } = useShoppingCart()

  const CartD = Object.entries(cartDetails);
  return(
        <div>
            <Header />
            <CartDetails CartD={CartD} clearCart={clearCart} removeItem={removeItem}/>
        </div>
    )
}
export default ShoppingCart;