import React, { useContext } from 'react';
import './avatar.styles.scss';
import { UserContext } from '../../context/user-context';

const Avatar = () => {
  const { user } = useContext(UserContext);
  return (
    <div className='avatar'>
      {user &&
        user.first_name.charAt(0).toUpperCase() +
          user.last_name.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
