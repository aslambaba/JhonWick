import React from 'react';
import Style from './style/CartProduct.module.css';
import { useShoppingCart } from 'use-shopping-cart';
import {Link } from 'gatsby';
function CartDetails() {
    const { cartDetails, clearCart, removeItem, totalPrice } = useShoppingCart()
    console.log(cartDetails)
    const CartD = Object.entries(cartDetails)
    return (
        <div>
            <div>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
            <table className={Style.MainTable} cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <td></td>
                        <td>Product Name</td>
                        <td> Quantity </td>
                        <td> Price </td>
                        <td> <p>Remove</p> </td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(CartD).map(obj => {
                            const cartData = CartD[obj];
                            console.log(cartData);
                            return (

                                <tr className={Style.BodyTR} key={cartData[0]}>
                                    <td></td>
                                    <td className={Style.BodyTD}>{cartData[1].name}</td>
                                    <td className={Style.BodyTD}>{cartData[1].quantity}</td>
                                    <td className={Style.BodyTD}>{`$${cartData[1].price}.00`}</td>
                                    <td className={Style.BodyTD}><button onClick={()=> removeItem(cartData[1].id)}>Click</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div className={Style.Billing}>
                <h3>Total: </h3>
                <h3>{`$${totalPrice}.00 USD`}</h3>
                <Link to='/checkout'><button>Checkout</button></Link>
            </div>
        </div>
    )
}

export default CartDetails;

