import React, { useContext, useState, useEffect } from 'react';
import './update-post.styles.scss';
import { AdminContext } from '../../context/admin-context';
import { PostsContext } from '../../context/posts-context';
import { getPost, putPost } from '../../services/posts';
import { useHistory, Link } from 'react-router-dom';
import Header from '../../components/header/header.component';

const UpdatePostView = ({ post }) => {
  const { admin } = useContext(AdminContext);
  const [input, setInput] = useState(post);

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handleUpdateClick = async () => {
    const response = await putPost(admin.id, input);
    console.log(response);
  };

  return (
    <div className='update-post'>
      <Header />
      <div className='content'>
        <p>Update Post</p>
        <div className='avatar'>
          {admin &&
            admin.first_name.charAt(0).toUpperCase() +
              admin.last_name.charAt(0).toUpperCase()}
        </div>
        <textarea
          placeholder="What's on your mind?"
          value={input}
          onChange={handleChange}
        />
        <div className='buttons'>
          <Link to='/home'>
            <button>Cancel</button>
          </Link>
          <button onClick={handleUpdateClick}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePostView;
