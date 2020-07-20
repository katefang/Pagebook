import React, { useContext, useEffect, useState } from 'react';
import './profile.styles.scss';
import { AdminContext } from '../../context/admin-context';
import MakePost from '../../components/make-post/make-post.component';
import { getPosts } from '../../services/posts';
import Feed from '../../components/feed/feed.component';
import FeedHeader from '../../components/feed-header/feed-header.component';
import { PostsContext } from '../../context/posts-context';

const ProfileView = () => {
  const { admin } = useContext(AdminContext);
  const [localPosts, setLocalPosts] = useState(null);
  const { setPosts } = useContext(PostsContext);
  let filteredPosts;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response);
      setLocalPosts(response);
    };

    fetchPosts();
  }, []);

  if (admin && localPosts) {
    filteredPosts = localPosts.filter(post => post.user_id === admin.id);
  }

  return (
    <div className='profile-view'>
      <div className='header' />
      {admin && (
        <div className='bio'>
          <div className='profile-avatar'>
            {admin.first_name.charAt(0).toUpperCase() +
              admin.last_name.charAt(0).toUpperCase()}
          </div>
          <p>
            {admin.first_name} {admin.last_name}
          </p>
        </div>
      )}

      <div className='content'>
        <div className='make-a-post'>
          <MakePost />
        </div>
        {filteredPosts &&
          filteredPosts.map(post => (
            <div key={post.id} className='display-post'>
              <FeedHeader
                userID={post.user_id}
                time={post.created_at}
                post={post}
              />
              <Feed postProp={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileView;
