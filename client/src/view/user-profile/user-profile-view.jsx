import React, { useEffect, useState } from 'react';
import './user-profile.styles.scss';
import { getPosts } from '../../services/posts';
import Profile from '../../components/profile/profile.component';
import { getUser } from '../../services/users';
import { useParams, useLocation } from 'react-router-dom';

const UserProfileView = () => {
  const [localPosts, setLocalPosts] = useState(null);
  const [user, setUser] = useState('');
  const { id } = useParams();
  const { pathname } = useLocation();
  let filteredPosts;

  useEffect(() => {
    fetchPosts();
    fetchUser();
  }, [pathname, id]);

  const fetchPosts = async () => {
    const response = await getPosts();
    setLocalPosts(response);
  };

  const fetchUser = async () => {
    const response = await getUser(id);
    setUser(response);
  };

  if (localPosts) {
    filteredPosts = localPosts.filter(post => post.user_id === +id);
  }

  return (
    <>
      {user && filteredPosts && <Profile user={user} posts={filteredPosts} />}
    </>
  );
};

export default UserProfileView;
