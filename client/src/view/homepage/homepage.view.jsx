import React, { useEffect, useContext, useState } from 'react';
import './homepage.styles.scss';
import Header from '../../components/header/header.component';
import MakePost from '../../components/make-post/make-post.component';
import { getPosts } from '../../services/posts';
import FeedHeader from '../../components/feed-header/feed-header.component';
import Feed from '../../components/feed/feed.component';
import { PostsContext } from '../../context/posts-context';

const Homepage = () => {
  const { posts, setPosts } = useContext(PostsContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log(response);
      setPosts(response);
    };

    fetchPosts();
  }, []);

  return (
    <div className='homepage'>
      <Header />
      <div className='content'>
        <MakePost />
        {posts &&
          posts.map(post => (
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

export default Homepage;
