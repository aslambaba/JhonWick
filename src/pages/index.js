import React from "react"
import Header from '../components/header';
import Landingpage from '../components/landingPage';
import Featureproduct from '../components/FeatureProduct';
import {graphql, useStaticQuery} from 'gatsby';

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
          description
        }
        unit_amount
      }
    }
  }     
  `);
  const Products = gqlData.allStripePrice;
  return (
    <div>
      <Header />
      <Landingpage />      
      <Featureproduct Pro={Products}/>
    </div>
  )
}

export default IndexPage
