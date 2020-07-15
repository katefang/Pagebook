import React, { useState, useContext } from 'react';
import './login.styles.scss';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../../services/auth';
import { UserContext } from '../../context/user-context';

const LoginView = () => {
  const { setUser } = useContext(UserContext);
  const { push } = useHistory();
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSignin = async e => {
    e.preventDefault();
    console.log(input);
    try {
      const response = await loginUser(input);
      console.log(response);
      setUser(response);
      push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = input;
  return (
    <div className='login-view'>
      <div className='header' />
      <div className='content'>
        <form onSubmit={handleSignin}>
          <label>
            <input
              className='email'
              placeholder='email'
              name='email'
              type='text'
              value={email}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              placeholder='password'
              name='password'
              type='password'
              value={password}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSignin}>Log In</button>
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
