import axios from 'axios';

const httpClient = axios.create({
	baseURL: '/api'
});

const getAboutUsContent = () => httpClient.get('/about-us');
const saveAboutUsContent = (payload) => httpClient.post('/save-about-us', payload);

export const useHomeApi = () => ({
	getAboutUsContent,
	saveAboutUsContent
});
