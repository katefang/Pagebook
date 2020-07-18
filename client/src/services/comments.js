import api from './api-helper';

export const getComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
};

export const getPostComments = async userID => {
  const resp = await api.get('comments/userID');
  return resp.data;
};

export const getComment = async id => {
  const resp = await api.get(`/comment/${id}`);
  return resp.data;
};

export const createComment = async commentData => {
  const resp = await api.post('/comments', { comment: commentData });
  return resp.data;
};

export const putComment = async (id, commentData) => {
  const resp = await api.put(`/comment/${id}`, { comment: commentData });
  return resp.data;
};

export const deleteComment = async id => {
  const resp = await api.delete(`/comment/${id}`);
  return resp;
};
