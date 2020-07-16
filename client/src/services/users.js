import api from './api-helper';

export const getUsers = async () => {
  const resp = await api.get('/users');
  return resp.data;
};

export const getUser = async id => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
};

export const createUser = async userData => {
  const resp = await api.post('/users', { user: userData });
  return resp.data;
};

export const putUser = async (id, userData) => {
  const resp = await api.put(`/user/${id}`, { user: userData });
  return resp.data;
};

export const deleteUser = async id => {
  const resp = await api.delete(`/user/${id}`);
  return resp;
};
