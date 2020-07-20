import api from './api-helper';

export const getLikes = async () => {
  const resp = await api.get('/likes');
  return resp.data;
};

export const getLike = async id => {
  const resp = await api.get(`/likes/${id}`);
  return resp.data;
};

export const createLike = async likeData => {
  const resp = await api.post('/likes', { like: likeData });
  return resp.data;
};

export const putLike = async (id, likeData) => {
  const resp = await api.put(`/likes/${id}`, { like: likeData });
  return resp.data;
};

export const deleteLike = async id => {
  const resp = await api.delete(`/likes/${id}`);
  return resp;
};
