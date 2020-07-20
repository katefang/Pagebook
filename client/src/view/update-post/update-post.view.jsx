import React, { useContext, useState, useEffect } from 'react';
import './update-post.styles.scss';
import { AdminContext } from '../../context/admin-context';
import { getPost, putPost } from '../../services/posts';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../components/header/header.component';

const UpdatePostView = () => {
  const { admin } = useContext(AdminContext);
  const [input, setInput] = useState('');
  const { push } = useHistory();
  const { id } = useParams();

  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPost(+id);
      setInput(response.post_text);
    };
    fetchPost();
  }, []);

  const handleUpdateClick = async () => {
    await putPost(+id, { post_text: input });
    push('/profile');
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
          placeholder='update post'
          value={input}
          onChange={handleChange}
        />
      </div>
      <div className='buttons'>
        <button onClick={() => push('/home')}>Cancel</button>
        <button onClick={handleUpdateClick}>Update</button>
      </div>
    </div>
  );
};

export default UpdatePostView;
