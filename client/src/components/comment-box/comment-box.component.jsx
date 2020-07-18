import React, { useContext, useState, useEffect } from 'react';
import './comment-box.styles.scss';
import { ReactComponent as SendIcon } from '../../images/send.svg';
import { AdminContext } from '../../context/admin-context';
import { createComment } from '../../services/comments';

const CommentBox = ({ postID }) => {
  const { admin } = useContext(AdminContext);
  const [input, setInput] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await createComment({
        user_id: admin.id,
        post_id: postID,
        comment_text: input
      });
      setInput('');
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {admin && (
        <div className='comment-box'>
          <div className='comment-box-avatar'>
            {admin.first_name.charAt(0).toUpperCase() +
              admin.last_name.charAt(0).toUpperCase()}
          </div>
          <input
            type='text'
            placeholder='write a comment....'
            value={input}
            onChange={handleChange}
          />
          <div className='send-icon'>
            <SendIcon onClick={handleCommentSubmit} />
          </div>
        </div>
      )}
    </>
  );
};

export default CommentBox;
