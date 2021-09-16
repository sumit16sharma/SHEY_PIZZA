import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);
  const cartItems = cartState.cartItems;

  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h2 style={{ fontSize: '40px' }}>My Cart</h2>

          {cartItems.map((item) => {
            return (
              <div className='flex-container'>
                <div className='text-start m-1 w-100'>
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price : {item.quantity} * {item.prices[0][item.varient]} ={' '}
                    {item.price}
                  </h1>
                  <h1 style={{ display: 'inline' }}>Quantity :</h1>
                  <i
                    className='fas fa-plus'
                    style={{ color: 'green', margin: '5px' }}
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity + 1, item.varient)
                      );
                    }}
                  ></i>

                  <b>{item.quantity}</b>

                  <i
                    className='fas fa-minus'
                    style={{ color: 'red', margin: '5px' }}
                    onClick={() => {
                      dispatch(
                        addToCart(item, item.quantity - 1, item.varient)
                      );
                    }}
                  ></i>
                  <hr />
                </div>

                <div className='m-1 w-100'>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ height: '80px', width: '80px' }}
                  />
                </div>

                <div className='m-1 w-100 mt-4'>
                  <i className='fas fa-trash-alt' style={{ color: 'red' }}></i>
                </div>
              </div>
            );
          })}
        </div>

        <div className='col-md-4'></div>
      </div>
    </div>
  );
};

export default CartScreen;
