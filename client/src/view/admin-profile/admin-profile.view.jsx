import React, { useContext, useEffect, useState } from 'react';
import './admin-profile.styles.scss';
import { AdminContext } from '../../context/admin-context';
import { getPosts } from '../../services/posts';
import Profile from '../../components/profile/profile.component';

const AdminProfileView = () => {
  const { admin } = useContext(AdminContext);
  const [localPosts, setLocalPosts] = useState(null);
  let filteredPosts;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setLocalPosts(response);
    };

    fetchPosts();
  }, []);

  if (admin && localPosts) {
    filteredPosts = localPosts.filter(post => post.user_id === admin.id);
  }

  return (
    <>
      {admin && filteredPosts && <Profile user={admin} posts={filteredPosts} />}
    </>
  );
};

export default AdminProfileView;
