import React, { useContext, useState } from 'react';
import './feed.styles.scss';
import { ChatSquare, HandThumbsUp } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LikeIcon } from '../../images/like.svg';
import { createLike, deleteLike } from '../../services/likes';
import { AdminContext } from '../../context/admin-context';

const Feed = ({ post }) => {
  const { admin } = useContext(AdminContext);
  const { push } = useHistory();

  const beenLiked = post.likes.find(one => one.post_id === post.id);

  const handleLike = async () => {
    try {
      const response = await createLike({
        user_id: post.user_id,
        post_id: post.id
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteLike = async id => {
    try {
      const response = await handleDeleteLike(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLike = () => {
    beenLiked ? handleDeleteLike(beenLiked.id) : handleLike();
  };

  return (
    <>
      <div className='post-text'>{post.post_text}</div>
      <hr />
      <div className='post-footer'>
        <div className='like' onClick={toggleLike}>
          <LikeIcon className='like-icon' /> Like
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
