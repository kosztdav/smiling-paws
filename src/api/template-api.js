import httpClient from './client/http-client';

const getTemplate = (templateId) => httpClient.get(`/templates/${templateId}`);
const saveTemplate = (templateId, payload) => httpClient.post(`/templates/${templateId}`, payload);

export const useTemplateApi = () => ({
	getTemplate,
	saveTemplate
});
