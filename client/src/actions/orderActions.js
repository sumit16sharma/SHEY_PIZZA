import axios from 'axios';
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_SUCCESS,
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
