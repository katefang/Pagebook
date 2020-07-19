import React from 'react';
import './show-comment.styles.scss';
import Avatar from '../avatar/avatar.component';

const ShowComment = ({ post, user }) => {
  return (
    <>
      {post && user && (
        <div className='show-comment'>
          <Avatar user={user} />
        </div>
      )}
    </>
  );
};

export default ShowComment;
