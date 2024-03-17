import httpClient from './client/http-client';

const getAllUsers = () => httpClient.get('/users');
const postUser = (payload) => httpClient.post('/users', payload);
const deleteUser = (id) => httpClient.delete(`/users/${id}`);
const updateUser = (id, payload) => httpClient.put(`/users/${id}`, payload);

export const useUserApi = () => ({
	getAllUsers,
	postUser,
	deleteUser,
	updateUser
});
