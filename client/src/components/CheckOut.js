import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import { setAlert } from '../actions/alert';
import Loading from './Loading';

const CheckOut = ({ subtotal }) => {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.placeOrder);
  const { success, loading, error } = orderState;

  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  };

  return (
    <div>
      {loading && <Loading />}
      {error && dispatch(setAlert(error, 'danger'))}
      {success &&
        dispatch(setAlert('Your Order Placed Successfully!!', 'success'))}

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
