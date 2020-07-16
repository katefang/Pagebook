import React from 'react';
import './profile.styles.scss';

const ProfileView = () => {
  return (
    <div className='profile-view'>
      <div className='header' />
      <div className='avatar'>
        {user.first_name.charAt(0).toUpperCase() +
          user.last_name.charAt(0).toUpperCase()}
      </div>
      <div className='content'></div>
    </div>
  );
};

export default ProfileView;
