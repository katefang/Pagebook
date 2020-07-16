import React, { useContext } from 'react';
import './make-post.styles.scss';
import { UserContext } from '../../context/user-context';
import { Link } from 'react-router-dom';

const MakePost = () => {
  const { user } = useContext(UserContext);

  return (
    <div className='make-post'>
      <div className='content'>
        <div className='avatar'>
          {user &&
            user.first_name.charAt(0).toUpperCase() +
              user.last_name.charAt(0).toUpperCase()}
        </div>
        <Link to='/create-post'>what's on your mind?</Link>
      </div>
    </div>
  );
};

export default MakePost;
