
import React from 'react';
import { CardElement  } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "20px",
      "::placeholder": {
        color: "black",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
  opp: {
    width: "10px",
  },
  MM: {
    display: "inline-block",
    width: "30px",
    h3: {
      margin: '0',
    }
  }
};

function CardSection() {
  return (
    <div>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </div>

  );
};

export default CardSection;
