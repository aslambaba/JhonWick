import React from "react"
import { useShoppingCart } from 'use-shopping-cart'

function IndexPage(){
  let productt = window.TwoCoInlineCart.products.list;
  console.log(window.TwoCoInlineCart.products.list)
  const { addItem, cartCount } = useShoppingCart();

  const p = {
    name: 'aslam',
    quantity: 1,
    price: 22,
  }

  return(
    <div>
      <h1>Hello</h1>
      <button onClick={()=>{
        window.TwoCoInlineCart.setup.setMode('DYNAMIC');
        window.TwoCoInlineCart.cart.setCurrency('USD');
       
        window.TwoCoInlineCart.products.add({
          name: 'A test dynamic product',
          quantity: 1,
          price: 20,
        });

        console.log(window.TwoCoInlineCart.products.list)
      }}>Click</button>
      <button onClick={()=>{
        addItem(p);
        }}>click</button>
    <p>{cartCount}</p>
      {
        Object.keys(productt).map((obj)=>{
          return(
            <div>

          <p>{productt[obj].name}</p>
            
            </div>
          )
        })
      }
    </div>
  )
}

export default IndexPage
