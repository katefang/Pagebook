import React, { useContext, useState, useEffect } from 'react';
import './feed.styles.scss';
import { ChatSquare } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LikeIcon } from '../../images/like.svg';
import { ReactComponent as LikeFilledIcon } from '../../images/likeFilled.svg';
import { ReactComponent as BlueLike } from '../../images/blueLike.svg';
import { createLike, deleteLike } from '../../services/likes';
import { getPost } from '../../services/posts';
import { AdminContext } from '../../context/admin-context';

const Feed = ({ postProp }) => {
  const { push } = useHistory();
  const [post, setPost] = useState();
  const [liked, setLiked] = useState(null);
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);

  let comment;

  totalComments > 1 ? (comment = 'comments') : (comment = 'comment');

  useEffect(() => {
    fetchPost();
    const likedPost = postProp.likes.find(
      one => one.user_id === postProp.user_id
    );
    setLiked(likedPost);
  }, []);

  const fetchPost = async () => {
    const response = await getPost(postProp.id);
    setPost(response);
    console.log(response);
    setTotalLikes(response.likes.length);
    setTotalComments(response.comments.length);
  };

  const handleLike = async () => {
    try {
      const response = await createLike({
        user_id: postProp.user_id,
        post_id: postProp.id
      });
      await fetchPost();
      setLiked(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteLike = async id => {
    try {
      const response = await deleteLike(id);
      await fetchPost();
      setLiked(null);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLike = () => {
    liked ? handleDeleteLike(liked.id) : handleLike();
  };

  return (
    <>
      {post && (
        <>
          <div className='post-text'>{post.post_text}</div>

          <div className='like-comment-popup'>
            {totalLikes > 0 && (
              <div className='popup-left'>
                <BlueLike className='popup-icon' /> {totalLikes}
              </div>
            )}
            {totalComments > 0 && (
              <div className='popup-right'>
                {totalComments} {comment}
              </div>
            )}
          </div>
          <hr />
          <div className='post-footer'>
            <div className='like' onClick={toggleLike}>
              {liked ? (
                <LikeFilledIcon className='like-icon' />
              ) : (
                <LikeIcon className='like-icon' />
              )}
              <span> Like</span>
            </div>
            <div
              className='comment'
              onClick={() => push(`/view-post/${post.id}`)}
            >
              <ChatSquare /> Comment
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
};

export default Feed;
