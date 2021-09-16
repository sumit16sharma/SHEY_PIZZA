import axios from 'axios';
import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAIL,
} from '../constants/pizzaConstants';

export const getAllPizzas = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PIZZAS_REQUEST });

    const { data } = await axios.get('/api/pizzas/getAllPizzas');

    dispatch({ type: GET_PIZZAS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PIZZAS_FAIL, payload: error });
  }
};
