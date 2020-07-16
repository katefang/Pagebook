import React, { useEffect, useContext, useState } from 'react';
import './homepage.styles.scss';
import Header from '../../components/header/header.component';
import MakePost from '../../components/make-post/make-post.component';
import { getPosts } from '../../services/posts';
import { getUsers } from '../../services/users';
import Avatar from '../../components/avatar/avatar.component';

const Homepage = () => {
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState();

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
        <div className='display-post'>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
