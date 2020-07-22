import React, { useContext, useState, useEffect } from 'react';
import './view-post.styles.scss';
import Header from '../../components/header/header.component';
import Feed from '../../components/feed/feed.component';
import FeedHeader from '../../components/feed-header/feed-header.component';
import { useParams } from 'react-router-dom';
import { AdminContext } from '../../context/admin-context';
import { getPost } from '../../services/posts';

const ViewPost = () => {
  const { admin } = useContext(AdminContext);
  const { id } = useParams();
  const [post, setPost] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(+id);
      setPost(response);
    };
    fetchPost();
  }, []);

  return (
    <div className='view-post'>
      <Header />
      {post && (
        <div className='content'>
          <div className='post'>
            <FeedHeader
              userID={post.user_id}
              time={post.created_at}
              post={post}
            />
            <Feed postProp={post} />
          </div>
          <div className='view-post-comment'>
            <textarea placeholder='comment' />
            <button>Add Comment</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewPost;
