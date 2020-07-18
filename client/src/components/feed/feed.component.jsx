import React from 'react';
import './feed.styles.scss';
import { ChatSquare, HandThumbsUp } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';

const Feed = ({ post }) => {
  const { push } = useHistory();

  return (
    <>
      <div className='post-text'>{post.post_text}</div>
      <hr />
      <div className='post-footer'>
        <div className='up'>
          <HandThumbsUp /> Like
        </div>
        <div className='comment' onClick={() => push(`/view-post/${post.id}`)}>
          <ChatSquare /> Comment
        </div>
      </div>
      <hr />
    </>
  );
};

export default Feed;
