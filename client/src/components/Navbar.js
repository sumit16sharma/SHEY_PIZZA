import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cartState = useSelector((state) => state.cart);

  return (
    <nav className='navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          SHEY PIZZA <i class='fas fa-pizza-slice'></i>
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' aria-current='page' href='/login'>
                Login
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/cart'>
                <i class='fas fa-shopping-cart'></i> Cart{' '}
                {cartState.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
