import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAIL,
  ADD_PIZZA_REQUEST,
  ADD_PIZZA_SUCCESS,
  ADD_PIZZA_FAIL,
  RESET_STATE,
  GET_PIZZA_BY_ID_REQUEST,
  GET_PIZZA_BY_ID_SUCCESS,
  GET_PIZZA_BY_ID_FAIL,
} from '../constants/pizzaConstants';

export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case GET_PIZZAS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_PIZZAS_SUCCESS:
      return {
        loading: false,
        pizzas: action.payload,
      };
    case GET_PIZZAS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addPizzaReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PIZZA_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ADD_PIZZA_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ADD_PIZZA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case RESET_STATE:
      return {
        loading: false,
        success: false,
      };
    default:
      return state;
  }
};

export const getPizzaByIDReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PIZZA_BY_ID_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_PIZZA_BY_ID_SUCCESS:
      return {
        loading: false,
        pizza: action.payload,
      };
    case GET_PIZZA_BY_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
