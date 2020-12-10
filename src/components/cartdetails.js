import React from 'react';
import Style from './style/CartProduct.module.css'
function CartDetails({ CartD, clearCart, removeItem }) {
    return (
        <div>
            <div>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
            <table className={Style.MainTable}>
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
                            return (

                                <tr className={Style.BodyTR} key={cartData[0]}>
                                    <td></td>
                                    <td className={Style.BodyTD}>{cartData[1].name}</td>
                                    <td className={Style.BodyTD}>{cartData[1].quantity}</td>
                                    <td className={Style.BodyTD}>{cartData[1].price}</td>
                                    <td className={Style.BodyTD}><button onClick={()=> removeItem(cartData[0])}>Click</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default CartDetails;