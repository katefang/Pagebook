import React from 'react';
import './landing.styles.scss';
import { Link } from 'react-router-dom';
import Header from '../../components/header/header.component';

const LandingView = () => (
  <div className='landing-view'>
    <Header />
    <div className='content'>
      <h2>Join Pagebook</h2>
      <p>We'll help you create an account in a few easy steps.</p>
      <Link to='/create-account' className='button'>
        <button>Get Started</button>
      </Link>

      <div className='footer'>
        <hr />
        <Link to='/login'>Already have an account?</Link>
      </div>
    </div>
  </div>
);

export default LandingView;
