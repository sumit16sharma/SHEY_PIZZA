import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../actions/orderActions';
import Loading from '../components/Loading';
import { setAlert } from '../actions/alert';
import Moment from 'react-moment';

const OrderScreen = () => {
  const dispatch = useDispatch();

  const orderState = useSelector((state) => state.getUserOrders);
  const { loading, error, orders } = orderState;

  useEffect(() => {
    dispatch(getUserOrders());
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: '35px' }}>My Orders</h2>
      <hr />
      <div className='row justify-content-center'>
        {loading && <Loading />}
        {error && dispatch(setAlert('Something Went Wrong!!', 'danger'))}
        {orders &&
          orders.map((order) => {
            return (
              <div
                className='col-md-8 m-2'
                style={{ backgroundColor: 'red', color: 'white' }}
              >
                <div className='flex-container'>
                  <div className='w-100 m-1' style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: '25px' }}>Items</h2>
                    <hr />
                    {order.orderItems.map((item) => {
                      return (
                        <div>
                          <p>
                            {item.name} [{item.varient}]*{item.quantity}=
                            {item.price}{' '}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <div className='w-100 m-1' style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: '25px' }}>Address</h2>
                    <hr />
                    <p>Street : {order.shippingAddress.street}</p>
                    <p>City : {order.shippingAddress.city}</p>
                    <p>Country : {order.shippingAddress.country}</p>
                    <p>Pincode : {order.shippingAddress.pincode}</p>
                  </div>
                  <div className='w-100 m-1' style={{ textAlign: 'left' }}>
                    <h2 style={{ fontSize: '25px' }}>Order Info</h2>
                    <hr />
                    <p>Order Amount : {order.orderAmount}</p>
                    <p>
                      Date : <Moment format='DD/MM/YYYY'>{order.date}</Moment>
                    </p>
                    <p>Transaction ID : {order.transactionId}</p>
                    <p>Order ID : {order._id}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderScreen;
