import React, { useContext } from 'react';
import './make-post.styles.scss';
import { Link } from 'react-router-dom';
import Avatar from '../avatar/avatar.component';

const MakePost = () => {
  return (
    <div className='make-post'>
      <div className='content'>
        <Avatar />
        <Link to='/create-post'>what's on your mind?</Link>
      </div>
    </div>
  );
};

export default MakePost;
