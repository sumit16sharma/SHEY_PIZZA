import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.cart);

  const authState = useSelector((state) => state.auth);
  const { isAuthenticated, user, loading } = authState;

  const onClick = () => {
    dispatch(logout());
    console.log('clicked');
  };

  const authLink = (
    <Fragment>
      <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
          <Link className='nav-link' aria-current='page' to='#!'>
            {!loading && isAuthenticated && user && user.name.split(' ')[0]}{' '}
            <i className='fas fa-user' />
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' aria-current='page' to='/orders'>
            Orders
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className='nav-link'
            aria-current='page'
            to='/'
            onClick={(e) => onClick(e)}
          >
            <span className='hide-sm'>Logout</span>{' '}
            <i className='fas fa-sign-out-alt' />
          </Link>
        </li>
      </ul>
    </Fragment>
  );

  const guestLink = (
    <ul className='navbar-nav ms-auto'>
      <li className='nav-item'>
        <Link className='nav-link' aria-current='page' to='/login'>
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          SHEY PIZZA <i class='fas fa-pizza-slice'></i>
        </Link>
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
              <Link className='nav-link' to='/cart'>
                <i class='fas fa-shopping-cart'></i> Cart{' '}
                {cartState.cartItems.length}
              </Link>
            </li>
            {!loading && (
              <Fragment>{isAuthenticated ? authLink : guestLink}</Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
