import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  getAllPizzasReducer,
  addPizzaReducer,
  getPizzaByIDReducer,
  editPizzaReducer,
} from './reducers/pizzaReducers';
import { cartReducer } from './reducers/cartReducers';
import { authReducer, getAllUsersReducer } from './reducers/authReducers';
import { alertReducer } from './reducers/alertReducers';
import {
  placeOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer,
} from './reducers/orderReducer';

const reducer = combineReducers({
  getAllPizzas: getAllPizzasReducer,
  cart: cartReducer,
  auth: authReducer,
  alert: alertReducer,
  placeOrder: placeOrderReducer,
  getUserOrders: getUserOrdersReducer,
  addPizza: addPizzaReducer,
  getPizzaByID: getPizzaByIDReducer,
  editPizza: editPizzaReducer,
  getAllOrders: getAllOrdersReducer,
  getAllUsers: getAllUsersReducer,
});

const cartItems = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: {
    cartItems: cartItems,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
