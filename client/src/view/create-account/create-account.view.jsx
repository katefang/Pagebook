import React, { useState, useContext } from 'react';
import './create-account.styles.scss';
import Header from '../../components/header/header.component';
import { Link, useHistory } from 'react-router-dom';
import { registerUser } from '../../services/auth';
import { AdminContext } from '../../context/admin-context';

const CreateAccountView = () => {
  const { setAdmin } = useContext(AdminContext);
  const { push } = useHistory();
  const [input, setInput] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    DOB: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSignUp = async e => {
    e.preventDefault();
    try {
      const response = await registerUser(input);
      setAdmin(response);
      push('/home');
    } catch (error) {
      console.log(error);
    }
  };

  const { first_name, last_name, DOB, gender, email, password } = input;
  return (
    <div className='create-account-view'>
      <Header />
      <div className='content'>
        <h3 className='title'>Create a New Account</h3>
        <h6 className='subtitle'>It's quick and easy.</h6>
        <div className='name'>
          <label>
            <input
              type='text'
              placeholder='first name'
              name='first_name'
              value={first_name}
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type='text'
              placeholder='last name'
              name='last_name'
              value={last_name}
              onChange={handleChange}
            />
          </label>
        </div>

        <label>
          <input
            type='email'
            name='email'
            value={email}
            placeholder='email'
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type='password'
            name='password'
            value={password}
            placeholder='password'
            onChange={handleChange}
          />
        </label>
        <div className='birthday'>
          <p>Birthday</p>

          <label>
            <input type='date' name='DOB' value={DOB} onChange={handleChange} />
          </label>
        </div>

        <div className='gender'>
          <p> Gender</p>
          <label>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={gender === 'female'}
              onChange={handleChange}
            />
            female
          </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={gender === 'male'}
              onChange={handleChange}
            />
            male
          </label>
          <label>
            <input
              type='radio'
              name='gender'
              value='idk'
              checked={gender === 'neither'}
              onChange={handleChange}
            />
            not sure
          </label>
        </div>
        <button onClick={handleSignUp}>Sign Up</button>
        <div className='footer'>
          <hr />
          <Link to='/login'>Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountView;
