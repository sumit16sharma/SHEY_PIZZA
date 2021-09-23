import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';

const OrderScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: '35px' }}>My Orders</h2>
    </div>
  );
};

export default OrderScreen;
