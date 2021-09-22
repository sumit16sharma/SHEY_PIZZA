import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);
  const isAuthenticated = authState.isAuthenticated;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  //Redirect
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Fragment>
      <div className='row justify-content-center mt-10'>
        <div
          className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'
          style={{ marginTop: '3%' }}
        >
          <h2 className='large text-primary'>Sign In</h2>
          <p className='lead'>
            <i className='fas fa-user'></i> Sign Into Your Account
          </p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
                required
                size='50'
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
                minLength='6'
                size='50'
              />
            </div>
            <input type='submit' className='btn btn-primary' value='Login' />
          </form>
          <p className='my-1'>
            Don't have an account? <a href='/register'>Sign Up</a>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginScreen;
