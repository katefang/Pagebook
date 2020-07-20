import React, { useContext, useState } from 'react';
import './create-post.styles.scss';
import Header from '../../components/header/header.component';
import { AdminContext } from '../../context/admin-context';
import { createPost } from '../../services/posts';

const CreatePost = () => {
  const { admin } = useContext(AdminContext);

  const [input, setInput] = useState();

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handlePostSubmit = async () => {
    try {
      const response = await createPost({
        user_id: admin.id,
        post_text: input
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='create-post'>
      <Header />
      <div className='content'>
        <p>Create Post</p>
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
      </div>
      <div className='button'>
        <button onClick={handlePostSubmit}>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
