import React, { useEffect, useState } from 'react';
import './users-pane.styles.scss';
import { getUsers } from '../../services/users';
import Avatar from '../avatar/avatar.component';
import { useHistory } from 'react-router-dom';

const UsersPane = () => {
  const { push } = useHistory();
  const [users, setUsers] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };

  return (
    <div className='users-pane'>
      {users &&
        users.map(user => (
          <div
            className='avatar-and-author'
            key={user.id}
            onClick={() => push(`/user-profile/${user.id}`)}
          >
            <div className='avatar'>
              <Avatar user={user} />
            </div>
            <div className='author'>
              {user.first_name + ' ' + user.last_name}
            </div>
          </div>
        ))}
    </div>
  );
};

export default UsersPane;
