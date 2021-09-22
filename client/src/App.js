import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { useEffect } from 'react';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Route path='/' exact component={HomeScreen} />
        <Route path='/cart' exact component={CartScreen} />
        <Route path='/register' exact component={RegisterScreen} />
        <Route path='/login' exact component={LoginScreen} />
      </BrowserRouter>
    </div>
  );
};

export default App;
