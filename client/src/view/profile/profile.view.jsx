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

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log(response);
      setPosts(response);
      setLocalPosts(response);
    };

    fetchPosts();
  }, []);

  let filteredPosts;

  if (admin && localPosts) {
    filteredPosts = localPosts.filter(post => post.user_id === admin.id);
  }

  console.log(filteredPosts);

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
        <hr />
        <MakePost />
        <hr />
        {filteredPosts &&
          filteredPosts.map(post => (
            <div key={post.id} className='display-post'>
              <FeedHeader
                id={post.user_id}
                time={post.created_at}
                post={post}
              />
              <Feed post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProfileView;
