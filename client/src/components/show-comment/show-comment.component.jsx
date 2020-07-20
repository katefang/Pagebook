import React, { useState, useEffect } from 'react';
import './show-comment.styles.scss';
import Avatar from '../avatar/avatar.component';
import ReplyBox from '../reply-box/reply-box.component';
import Modal from '../modal/modal.component';
import { deleteComment } from '../../services/comments';
import { getUser } from '../../services/users';

const ShowComment = ({ comment, userID }) => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const toggleModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    if (userID) {
      const response = await getUser(userID);
      console.log(response);
      setUser(response);
    }
  };

  const handleCommentDelete = async id => {
    await deleteComment(id);
  };

  const handleCommentReply = () => {};

  return (
    <>
      {comment && user && (
        <div key={comment.id} className='comment-content'>
          <div key={comment.id} className='each-comment'>
            <Avatar user={user} />
            <div className='name-and-comment' onClick={toggleModal}>
              <span className='name'>
                {user.first_name} {user.last_name}
              </span>
              <br />
              <span className='comment-text'>{comment.comment_text}</span>
              <Modal show={show} toggleModal={toggleModal}>
                <p className='modal-reply' onClick={() => handleCommentReply()}>
                  Reply
                </p>
                <hr />
                <p
                  className='modal-delete'
                  onClick={() => handleCommentDelete(comment.id)}
                >
                  Delete
                </p>
                <hr />
                <p className='modal-cancel' onClick={toggleModal}>
                  Cancel
                </p>
              </Modal>
            </div>
          </div>
          <div className='reply-bar'>
            <ReplyBox comment={comment} />
          </div>
        </div>
      )}
    </>
  );
};

export default ShowComment;
