import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/cart' exact component={CartScreen} />
        <Route path='/register' exact component={RegisterScreen} />
        <Route path='/login' exact component={LoginScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
