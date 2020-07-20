import React, { useState, useContext, useEffect } from 'react';
import './feed-header.styles.scss';
import { getUsers } from '../../services/users';
import { deletePost } from '../../services/posts';
import { ThreeDots, EyeFill, TrashFill, Pencil } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import Avatar from '../avatar/avatar.component';
import Modal from '../modal/modal.component';

const FeedHeader = ({ userID, time, post }) => {
  const [users, setUsers] = useState(null);
  const { push } = useHistory();
  const [show, setShow] = useState(false);
  let user;

  useEffect(() => {
    const findUsers = async () => {
      const response = await getUsers();
      setUsers(response);
    };
    findUsers();
  }, []);

  if (users) {
    user = users.find(person => person.id === userID);
  }

  const toggleModal = () => {
    setShow(!show);
  };

  const handleDeletePost = async () => {
    await deletePost(post.id);
    toggleModal();
    window.location.reload();
  };

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
      {users && user && (
        <div className='fh-content'>
          <div className='left'>
            <div className='avatar'>
              <Avatar user={user} />
            </div>
            <div className='author-and-time'>
              <div className='author'>
                {user.first_name + ' ' + user.last_name}
              </div>
              <div className='time'>{date}</div>
            </div>
          </div>
          <div className='right'>
            <ThreeDots onClick={toggleModal} />
            <Modal show={show} toggleModal={toggleModal}>
              <div className='edit-delete-view'>
                <p onClick={() => push(`/update-post/${post.id}`)}>
                  <Pencil className='icon' /> <span> Edit</span>
                </p>
                <hr />
                <p onClick={handleDeletePost}>
                  <TrashFill className='icon' /> <span> Delete</span>
                </p>
                <hr />
                <p>
                  <EyeFill className='icon' /> <span> View</span>
                </p>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedHeader;
