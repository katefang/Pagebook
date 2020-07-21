import React, { useEffect, useContext, useState } from 'react';
import './homepage.styles.scss';
import Header from '../../components/header/header.component';
import MakePost from '../../components/make-post/make-post.component';
import { getPosts } from '../../services/posts';
import FeedHeader from '../../components/feed-header/feed-header.component';
import Feed from '../../components/feed/feed.component';
import { AdminContext } from '../../context/admin-context';
import UsersPane from '../../components/users-pane/users-pane.component';

const Homepage = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await getPosts();
    setPosts(response);
    console.log(response);
  };

  return (
    <div className='homepage'>
      <Header />
      <div className='desktop'>
        <div className='content'>
          <div className='make-a-post'>
            <MakePost />
          </div>
          {posts &&
            posts.map(post => (
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
        <div className='side-pane'>
          <UsersPane />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
