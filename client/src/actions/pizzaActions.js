import axios from 'axios';
import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAIL,
  ADD_PIZZA_FAIL,
  ADD_PIZZA_REQUEST,
  ADD_PIZZA_SUCCESS,
  RESET_STATE,
  GET_PIZZA_BY_ID_FAIL,
  GET_PIZZA_BY_ID_SUCCESS,
  GET_PIZZA_BY_ID_REQUEST,
  EDIT_PIZZA_REQUEST,
  EDIT_PIZZA_SUCCESS,
  EDIT_PIZZA_FAIL,
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

export const getPizzaByID = (pizzaid) => async (dispatch) => {
  try {
    dispatch({ type: GET_PIZZA_BY_ID_REQUEST });

    const { data } = await axios.post('/api/pizzas/getpizzabyid', { pizzaid });

    dispatch({ type: GET_PIZZA_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PIZZA_BY_ID_FAIL, payload: error });
  }
};

export const editPizza = (editedpizza) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_PIZZA_REQUEST });

    await axios.post('/api/pizzas/editpizza', { editedpizza });

    dispatch({ type: EDIT_PIZZA_SUCCESS });

    window.location.href = '/admin/pizzaslist';

    dispatch({ type: RESET_STATE });
  } catch (error) {
    dispatch({ type: EDIT_PIZZA_FAIL, payload: error });
  }
};
