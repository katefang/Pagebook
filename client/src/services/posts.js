import api from './api-helper';

export const getPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
};

export const getPost = async id => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

export const createPost = async postData => {
  const resp = await api.post('/posts', { posts: postData });
  return resp.data;
};

export const putPost = async (id, postData) => {
  const resp = await api.put(`/post/${id}`, { post: postData });
  return resp.data;
};

export const deleteFood = async id => {
  const resp = await api.delete(`/posts/${id}`);
  return resp;
};
