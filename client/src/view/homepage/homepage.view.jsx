import React, { useEffect, useContext, useState } from 'react';
import './homepage.styles.scss';
import Header from '../../components/header/header.component';
import MakePost from '../../components/make-post/make-post.component';
import { getPosts } from '../../services/posts';
import { getUsers } from '../../services/users';
import FeedHeader from '../../components/feed-header/feed-header.component';
import { UsersContext } from '../../context/users-context';
import { HeartFill, ChatSquareFill } from 'react-bootstrap-icons';

const Homepage = () => {
  const [posts, setPosts] = useState();
  const { users, setUsers } = useContext(UsersContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      console.log(response);
      setPosts(response);
    };
    const fetchUsers = async () => {
      const response = await getUsers();
      console.log(response);
      setUsers(response);
    };
    fetchPosts();
    fetchUsers();
  }, []);

  return (
    <div className='homepage'>
      <Header />
      <div className='content'>
        <MakePost />
        {posts &&
          posts.map(post => (
            <div key={post.id} className='display-post'>
              <FeedHeader id={post.user_id} time={post.created_at} />
              <div className='post-text'>{post.post_text}</div>
              <hr />
              <div className='post-footer'>
                <div className='up'>
                  <HeartFill /> Like
                </div>
                <div className='comment'>
                  <ChatSquareFill /> Comment
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Homepage;
