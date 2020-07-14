import React from 'react';
import './landing.styles.scss';
import { Link } from 'react-router-dom';

const LandingView = () => (
  <div className='landing-view'>
    <h2>Join Fansbook</h2>
    <p>we'll help you create an account in a few easy steps</p>
    <Link to='/create-account'>
      <button>Get Started</button>
    </Link>

    <div className='footer'>
      <hr />
      <Link to='/login'>Already have an account?</Link>
    </div>
  </div>
);

export default LandingView;
