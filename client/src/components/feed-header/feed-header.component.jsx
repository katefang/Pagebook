import React, { useState, useContext, useEffect } from 'react';
import './feed-header.styles.scss';
import { getUsers } from '../../services/users';
import { deletePost } from '../../services/posts';
import { ThreeDots, EyeFill, TrashFill, Pencil } from 'react-bootstrap-icons';
import Modal from 'react-bootstrap/esm/Modal';
import { useHistory } from 'react-router-dom';

const FeedHeader = ({ id, time, post }) => {
  const [users, setUsers] = useState(null);
  const { push } = useHistory();
  const [modalShow, setModalShow] = useState(false);
  let user;

  useEffect(() => {
    const findUsers = async () => {
      const response = await getUsers();
      setUsers(response);
    };
    findUsers();
  }, []);

  if (users) {
    user = users.find(person => person.id === id);
  }

  const handleModalClose = () => setModalShow(false);

  const handleModalShow = () => setModalShow(true);

  const handleEditPost = () => push('/update-post');

  const handleDeletePost = async () => {
    const response = await deletePost(post.id);
    console.log(response);
  };

  const handleViewPost = () => push('/profile');

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
        <div className='fh-content'>
          <div className='left'>
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
          </div>
          <div className='right'>
            <ThreeDots onClick={handleModalShow} />
            <Modal
              centered
              size='sm'
              show={modalShow}
              onHide={handleModalClose}
            >
              <Modal.Body>
                <p onClick={handleEditPost} post={post}>
                  <Pencil className='icon' /> <span> Edit</span>
                </p>
                <hr />
                <p onClick={handleDeletePost}>
                  <TrashFill className='icon' /> <span> Delete</span>
                </p>
                <hr />
                <p onClick={handleViewPost}>
                  <EyeFill className='icon' /> <span> View</span>
                </p>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedHeader;
