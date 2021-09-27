import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { useEffect } from 'react';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import OrderScreen from './screens/OrderScreen';
import AdminScreen from './screens/AdminScreen';
import ContactScreen from './screens/ContactScreen';
import NotFound from './screens/NotFound';

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

        <Switch>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/cart' exact component={CartScreen} />
          <Route path='/register' exact component={RegisterScreen} />
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/orders' exact component={OrderScreen} />
          <Route path='/contact' exact component={ContactScreen} />
          <Route path='/admin' component={AdminScreen} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
