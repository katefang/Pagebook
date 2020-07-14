import React from 'react';
import './login.styles.scss';
import { Link } from 'react-router-dom';

const LoginView = () => {
  return (
    <div className='login-view'>
      <div className='header' />
      <div className='content'>
        <form>
          <label>
            <input className='email' type='text' placeholder='email' />
          </label>
          <label>
            <input type='password' placeholder='password' />
          </label>
          <button>Log In</button>
        </form>
        <div className='footer'>
          <div className='divider'>
            <hr />
            or
            <hr />
          </div>
          <Link to='/create-account'>
            <button>Create New Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
