import React from 'react';
import './homepage.styles.scss';
import Header from '../../components/header/header.component';
import MakePost from '../../components/make-post/make-post.component';

const Homepage = () => {
  return (
    <div className='homepage'>
      <Header />
      <div className='content'>
        <MakePost />
      </div>
    </div>
  );
};

export default Homepage;
