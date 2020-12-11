import React from 'react';
import Style from './style/featureProduct.module.css';
import { useShoppingCart } from 'use-shopping-cart';
function FeatureProduct({ Pro }) {

    const { addItem } = useShoppingCart();
    const Products = Pro.nodes;
    return (
        <div>
            <div className={Style.Fheading}>
                <h1>Feature Product</h1>
            </div>
            <div className={Style.ProductSec}>
                {
                    Object.keys(Products).map(object => {
                        const item = Products[object];
                        const itemPrice = parseInt(item.unit_amount/100);
                        const CustomProduct = {
                            name: item.product.name,
                            id: item.id,
                            price: itemPrice,
                            image: item.product.images[0],
                        }
                        return (
                            <div className={Style.ProductItem} key={Products[object].id}>
                                <img src={Products[object].product.images[0]} />
                                <p>{Products[object].product.name}</p>
                                <p>{`$${itemPrice}.00 USD`}</p>
                                <div>

                                    <button className={Style.AddMinBTN}>-</button>
                                    <p className={Style.AddMinTXT}>1</p>
                                    <button className={Style.AddMinBTN}>+</button>
                                    <button onClick={() => { addItem(CustomProduct) }}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FeatureProduct;