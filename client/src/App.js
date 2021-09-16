import './App.css';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/cart' exact component={CartScreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
