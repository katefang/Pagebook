import React from 'react';
import './avatar.styles.scss';

const Avatar = ({ user }) => {
  return (
    <div className='avatar-component'>
      {user.first_name.charAt(0).toUpperCase() +
        user.last_name.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
