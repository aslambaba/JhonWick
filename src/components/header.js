import React from 'react';
import {Link} from 'gatsby';
import Style from './style/header.module.css';

function Header(){
    return(
        <div className={Style.root}>
            <Link className={Style.homelink} to={`/`} >John Wich</Link>
            <Link className={Style.Checkoutlink} to={`/shoppingcart`} >Checkout</Link>
        </div>
    )
}

export default Header;