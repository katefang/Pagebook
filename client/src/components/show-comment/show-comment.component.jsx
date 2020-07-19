import React from 'react';
import './show-comment.styles.scss';
import Avatar from '../avatar/avatar.component';
import ReplyBox from '../reply-box/reply-box.component';

const ShowComment = ({ post, user }) => {
  return (
    <>
      {post && user && (
        <div className='show-comment'>
          {post.comments.map(comment => (
            <div className='content'>
              <div key={comment.id} className='each-comment'>
                <Avatar user={user} />
                <div className='name-and-comment'>
                  <span className='name'>
                    {user.first_name} {user.last_name}
                  </span>
                  <br />
                  <span className='comment-text'>{comment.comment_text}</span>
                </div>
              </div>
              <div className='reply-bar'>
                <ReplyBox comment={comment} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ShowComment;
