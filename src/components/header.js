import React from 'react';
import { Link } from 'gatsby';
import Style from './style/header.module.css';
import { useShoppingCart } from 'use-shopping-cart';

function Header() {
    const { cartCount } = useShoppingCart()
    return (
        <div className={Style.root}>
            <div className={Style.homelink}>
                <Link to={`/`} className={Style.Logo}>JOHN WICK</Link>
            </div>
            <div  className={Style.Checkoutlink}>
                <Link className={Style.Checkout} to={`/shoppingcart`} >Checkout<sup>{cartCount}</sup></Link>
            </div>
        </div>
    )
}

export default Header;