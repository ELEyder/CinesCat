import axios from 'axios';

const createApiClient = (contentType = 'application/json') => {
  const apiClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Content-Type': contentType,
    },
    withCredentials: true,
  });

  apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return apiClient;
};

export const apiClient = createApiClient();
export const apiClientFiles = createApiClient('multipart/form-data');
