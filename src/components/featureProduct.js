import React  from 'react';
import Style from './style/featureProduct.module.css';

function featureProduct({ Products, addItem , cartDetails }) {
    
    return (
        <div>
            <div className={Style.Fheading}>
                <h1>Feature Product</h1>
            </div>
            <div className={Style.ProductSec}>
                {
                    Products.map(object => (
                        <div className={Style.ProductItem} key={object.id}>
                            <img src={object.product.images[0]} />
                            <p>{object.product.name}</p>
                            <div>

                                <button className={Style.AddMinBTN}>-</button>
                                <p className={Style.AddMinTXT}>1</p>
                                <button className={Style.AddMinBTN}>+</button>
                                <button onClick={()=>{addItem(object.product)}}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default featureProduct;