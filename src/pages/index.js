import React from "react"
import { useShoppingCart } from 'use-shopping-cart'
import Header from '../components/header';
import Landingpage from '../components/landingPage';
import Featureproduct from '../components/featureProduct';
import {graphql, useStaticQuery} from 'gatsby';

function IndexPage() {

  
  const { addItem, cartDetails } = useShoppingCart()

  const gqlData = useStaticQuery(graphql`
  query MyQuery {
      allStripePrice {
        nodes {
          id
          product {
            images
            id
            name
          }
        }
      }
    }      
  `);
  const Products = gqlData.allStripePrice.nodes;
  return (
    <div>
      <Header />
      <Landingpage />      
      <Featureproduct Products={Products} addItem={addItem} cartDetails={cartDetails}/>
    </div>
  )
}

export default IndexPage
