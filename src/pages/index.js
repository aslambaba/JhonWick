import React from "react"
import Header from '../components/header';
import Landingpage from '../components/LandingPage';
import Featureproduct from '../components/Featureproduct';
import {graphql, useStaticQuery} from 'gatsby';
import Style from './style/index.module.css';

function IndexPage() {


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
        unit_amount
      }
    }
  }     
  `);
  const Products = gqlData.allStripePrice;
  return (
    <div className={Style.MainContainer}>
      <Header />
      <Landingpage />      
      <Featureproduct Pro={Products}/>
    </div>
  )
}

export default IndexPage
