import React, { useContext, useState } from 'react';
import './create-post.styles.scss';
import Header from '../../components/header/header.component';
import { UserContext } from '../../context/user-context';
import { PostContext } from '../../context/post-context';
import Avatar from '../../components/avatar/avatar.component';
import { createPost } from '../../services/posts';

const CreatePost = () => {
  const { user } = useContext(UserContext);
  const { setPost } = useContext(PostContext);
  const [input, setInput] = useState();

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  const handlePostSubmit = async () => {
    try {
      const response = await createPost({
        user_id: user.id,
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
        <Avatar />
        <textarea
          placeholder="What's on your mind?"
          value={input}
          onChange={handleChange}
        />
        <button onClick={handlePostSubmit}>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
