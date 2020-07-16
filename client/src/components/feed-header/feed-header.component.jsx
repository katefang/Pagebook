import React, { useState, useContext, useEffect } from 'react';
import './feed-header.styles.scss';
import { getUser } from '../../services/users';
import { ThreeDots } from 'react-bootstrap-icons';

const FeedHeader = ({ id, time }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const findUser = async () => {
      const response = await getUser(id);
      setUser(response);
    };
    findUser();
  }, []);

  const timeString = new Date(time);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  const date = timeString.toLocaleTimeString('en-US', options);

  return (
    <div className='feed-header'>
      {user && (
        <div className='content'>
          <div className='avatar'>
            {user.first_name.charAt(0).toUpperCase() +
              user.last_name.charAt(0).toUpperCase()}
          </div>
          <div className='author-and-time'>
            <div className='author'>
              {user.first_name + ' ' + user.last_name}
            </div>
            <div className='time'>{date}</div>
          </div>
          <ThreeDots />
        </div>
      )}
    </div>
  );
};

export default FeedHeader;
