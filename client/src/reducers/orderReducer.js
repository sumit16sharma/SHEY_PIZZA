import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_FAILED,
  PLACE_ORDER_SUCCESS,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_FAIL,
  GET_USER_ORDERS_REQUEST,
} from '../constants/orderConstants';

export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return {
        loading: true,
      };
    case PLACE_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case PLACE_ORDER_FAILED:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case GET_USER_ORDERS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_USER_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      };
    case GET_USER_ORDERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
