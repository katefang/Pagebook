import React, { useEffect, useContext, useState } from 'react';
import './homepage.styles.scss';
import Header from '../../components/header/header.component';
import MakePost from '../../components/make-post/make-post.component';
import { getPosts } from '../../services/posts';
import FeedHeader from '../../components/feed-header/feed-header.component';
import Feed from '../../components/feed/feed.component';
import { AdminContext } from '../../context/admin-context';
import AddCommentBar from '../../components/add-comment-bar/add-comment-bar.component';

const Homepage = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response);
      console.log(response);
    };
    fetchPosts();
  }, []);

  return (
    <div className='homepage'>
      <Header />
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
              <AddCommentBar postID={post.id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
