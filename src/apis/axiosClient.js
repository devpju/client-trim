import axios from 'axios';
import queryString from 'query-string';

const BASE_URL = 'http://192.168.1.101:8080/';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  paramsSerializer: params => queryString.stringify(params),
});

const setHeaders = config => {
  config.headers = {
    Authorization: '',
    Accept: 'application/json',
    ...config.headers,
  };
  return config;
};

const handleResponse = response => {
  if (response.data && response.status >= 200 && response.status < 300) {
    return response.data;
  }
  return Promise.reject(response.data);
};

const handleError = error => {
  const { response } = error;
  return Promise.reject(response?.data || error.message);
};

axiosClient.interceptors.request.use(setHeaders);
axiosClient.interceptors.response.use(handleResponse, handleError);

export default axiosClient;
