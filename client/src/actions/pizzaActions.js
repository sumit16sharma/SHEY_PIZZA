import axios from 'axios';
import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAIL,
  ADD_PIZZA_FAIL,
  ADD_PIZZA_REQUEST,
  ADD_PIZZA_SUCCESS,
  RESET_STATE,
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

export const filterPizzas = (searchKey, category) => async (dispatch) => {
  try {
    dispatch({ type: GET_PIZZAS_REQUEST });

    const { data } = await axios.get('/api/pizzas/getAllPizzas');
    var filteredPizzas = data.filter((pizza) =>
      pizza.name.toLowerCase().includes(searchKey)
    );

    if (category !== 'all') {
      var filteredPizzas = data.filter(
        (pizza) => pizza.category.toLowerCase() == category
      );
    }

    dispatch({ type: GET_PIZZAS_SUCCESS, payload: filteredPizzas });
  } catch (error) {
    dispatch({ type: GET_PIZZAS_FAIL, payload: error });
  }
};

export const addPizza = (pizza) => async (dispatch) => {
  try {
    dispatch({ type: ADD_PIZZA_REQUEST });

    await axios.post('/api/pizzas/addpizza', { pizza });

    dispatch({ type: ADD_PIZZA_SUCCESS });

    dispatch({ type: RESET_STATE });
  } catch (error) {
    dispatch({ type: ADD_PIZZA_FAIL, payload: error });
  }
};
