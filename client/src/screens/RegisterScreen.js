import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../actions/authActions';
import { setAlert } from '../actions/alert';

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);
  const isAuthenticated = authState.isAuthenticated;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      dispatch(setAlert('Passwords not Match!!', 'danger'));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  //Redirect
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <div className='register'>
      <div className='row justify-content-center mt-10'>
        <div
          className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'
          style={{ marginTop: '3%' }}
        >
          <h2 className='large text-primary'>Sign Up</h2>
          <p className='lead'>
            <i className='fas fa-user'></i> Create Your Account
          </p>
          <form className='form' onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
                required
                size='50'
              />
            </div>
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
            <div className='form-group'>
              <input
                type='password'
                placeholder='Confirm Password'
                name='password2'
                value={password2}
                onChange={(e) => onChange(e)}
                minLength='6'
                size='50'
              />
            </div>
            <input type='submit' className='btn btn-primary' value='Register' />
          </form>
          <p className='my-2'>
            Already have an account? <a href='/login'>Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
