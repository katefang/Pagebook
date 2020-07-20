import React, { useContext, useState, useEffect } from 'react';
import './feed.styles.scss';
import { ChatSquare } from 'react-bootstrap-icons';
import { ReactComponent as SendIcon } from '../../images/send.svg';
import { ReactComponent as LikeIcon } from '../../images/like.svg';
import { ReactComponent as LikeFilledIcon } from '../../images/likeFilled.svg';
import { ReactComponent as BlueLike } from '../../images/blueLike.svg';
import { createLike, deleteLike } from '../../services/likes';
import { createComment } from '../../services/comments';
import { getPost } from '../../services/posts';
import ShowComment from '../show-comment/show-comment.component';
import { AdminContext } from '../../context/admin-context';

const Feed = ({ postProp }) => {
  const { admin } = useContext(AdminContext);
  const [input, setInput] = useState('');
  const [post, setPost] = useState();
  const [liked, setLiked] = useState(null);
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [commentDisplay, setCommentDisplay] = useState('none');
  let likedPost;
  let comment;

  totalComments > 1 ? (comment = 'comments') : (comment = 'comment');

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handleCommentSubmit = async () => {
    try {
      await createComment({
        user_id: admin.id,
        post_id: postProp.id,
        comment_text: input
      });
      fetchPost();
      setInput('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
    likedPost = postProp.likes.find(one => one.user_id === postProp.user_id);
    setLiked(likedPost);
  }, []);

  const fetchPost = async () => {
    const response = await getPost(postProp.id);
    setPost(response);
    setTotalLikes(response.likes.length);
    setTotalComments(response.comments.length);
  };

  const handleLike = async () => {
    try {
      const response = await createLike({
        user_id: admin.id,
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
      await deleteLike(id);
      await fetchPost();
      setLiked(null);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLike = () => {
    console.log(liked);

    if (liked) {
      if (liked.user_id === admin.id) {
        handleDeleteLike(liked.id);
      } else {
        handleLike();
      }
    } else {
      handleLike();
    }
  };

  const togglesShowComment = () => {
    setCommentDisplay('block');
  };

  return (
    <>
      {post && admin && (
        <>
          <div className='post-text'>{post.post_text}</div>
          <div className='like-comment-popup'>
            {totalLikes > 0 && (
              <div className='popup-left'>
                <BlueLike className='popup-icon' /> {totalLikes}
              </div>
            )}
            {totalComments > 0 && (
              <div className='popup-right' onClick={togglesShowComment}>
                {totalComments} {comment}
              </div>
            )}
          </div>
          <hr />
          <div className='post-footer'>
            <div className='like' onClick={toggleLike}>
              {liked && liked.user_id === admin.id ? (
                <LikeFilledIcon className='like-icon' />
              ) : (
                <LikeIcon className='like-icon' />
              )}
              <span> Like</span>
            </div>
            <div className='comment' onClick={togglesShowComment}>
              <ChatSquare /> Comment
            </div>
          </div>
          <hr />
          <div style={{ display: commentDisplay }}>
            {post.comments.map(comment => (
              <ShowComment
                comment={comment}
                userID={comment.user_id}
                key={comment.id}
              />
            ))}
          </div>

          <div className='add-comment-bar'>
            <div className='add-comment-bar-avatar'>
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
        </>
      )}
    </>
  );
};

export default Feed;
