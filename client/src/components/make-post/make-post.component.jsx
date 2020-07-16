import React, { useContext } from 'react';
import './make-post.styles.scss';
import { Link } from 'react-router-dom';
import { AdminContext } from '../../context/admin-context';

const MakePost = () => {
  const { admin } = useContext(AdminContext);

  return (
    <div className='make-post'>
      <div className='content'>
        <div className='avatar'>
          {admin &&
            admin.first_name.charAt(0).toUpperCase() +
              admin.last_name.charAt(0).toUpperCase()}
        </div>
        <Link to='/create-post'>what's on your mind?</Link>
      </div>
    </div>
  );
};

export default MakePost;
