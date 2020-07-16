import React, { useContext } from 'react';
import './avatar.styles.scss';
import { AdminContext } from '../../context/admin-context';

const Avatar = () => {
  const { admin } = useContext(AdminContext);
  return (
    <div className='avatar'>
      {admin &&
        admin.first_name.charAt(0).toUpperCase() +
          admin.last_name.charAt(0).toUpperCase()}
    </div>
  );
};

export default Avatar;
