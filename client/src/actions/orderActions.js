import axios from 'axios';
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_SUCCESS,
  GET_USER_ORDERS_REQUEST,
  GET_USER_ORDERS_FAIL,
  GET_USER_ORDERS_SUCCESS,
} from '../constants/orderConstants';

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {
  dispatch({ type: PLACE_ORDER_REQUEST });

  const currentUser = getState().auth.user;
  const cartItems = getState().cart.cartItems;

  try {
    const res = await axios.post('/api/orders/placeorder', {
      token,
      subtotal,
      currentUser,
      cartItems,
    });

    dispatch({ type: PLACE_ORDER_SUCCESS });
    console.log(res);
  } catch (error) {
    dispatch({ type: PLACE_ORDER_FAILED });
    console.log(error);
  }
};

export const getUserOrders = () => async (dispatch, getState) => {
  const user = getState().auth.user;

  dispatch({ type: GET_USER_ORDERS_REQUEST });

  try {
    const { data } = await axios.post('/api/orders/getuserorders', {
      userid: user._id,
    });

    dispatch({ type: GET_USER_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_ORDERS_FAIL, payload: error });
  }
};
