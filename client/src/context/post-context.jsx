import React, { createContext, useState } from 'react';

export const PostContext = createContext({
  post: {},
  setPost: () => {}
});

const PostContextProvider = ({ children }) => {
  const [post, setPost] = useState(null);

  return (
    <PostContext.Provider value={{ post, setPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
