import React from 'react';
import './feed.styles.scss';
import { HeartFill, ChatSquare, HandThumbsUp } from 'react-bootstrap-icons';

const Feed = ({ post }) => {
  return (
    <>
      <div className='post-text'>{post.post_text}</div>
      <hr />
      <div className='post-footer'>
        <div className='up'>
          <HandThumbsUp /> Like
        </div>
        <div className='comment'>
          <ChatSquare /> Comment
        </div>
      </div>
      <hr />
    </>
  );
};

export default Feed;
