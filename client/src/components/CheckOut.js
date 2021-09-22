import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CheckOut = ({ subtotal }) => {
  const tokenHandler = (token) => {
    console.log(token);
  };

  return (
    <div>
      <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        currency='INR'
        stripeKey='pk_test_51JcTUwSEnWR3M7tyxZmtOQJV7KKntzFaoKEL4rIlLawoOkkTInbuHbefrq6qnnkgJflFGHxUqPRhkxk5hX5QOIRf00JUsVIuFp'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
    </div>
  );
};

export default CheckOut;
