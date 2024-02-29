import axios from 'axios';

const httpClient = axios.create({
	baseURL: '/api'
});

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
