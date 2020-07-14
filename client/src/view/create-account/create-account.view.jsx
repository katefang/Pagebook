import React from 'react';
import './create-account.styles.scss';

const CreateAccountView = () => {
  return (
    <div className='create-account-view'>
      <div className='question'>What's Your Name?</div>
      <div className='name'>
        <label>
          <input type='text' placeholder='first name' />
        </label>
        <label>
          <input type='text' placeholder='last name' />
        </label>
      </div>
      <div className='question'>When's Your Birthday?</div>
      <label>
        <input type='date' name='dob' />
      </label>
      <div className='question'>What's Your Gender?</div>
      <div className='gender'>
        <label>
          <input type='radio' />
          female
        </label>
        <label>
          <input type='radio' />
          male
        </label>
      </div>
      <div className='question'>What's Your Email Address?</div>
      <label>
        <input type='email' placeholder='email' />
      </label>
      <div className='question'>Create a Password</div>
      <label>
        <input type='password' placeholder='password' />
      </label>
      <button>Sign Up</button>
    </div>
  );
};

export default CreateAccountView;
