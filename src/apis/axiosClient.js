import axios from 'axios';
import queryString from 'query-string';

const baseURL = 'http://192.168.1.101:8080/';

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: params => queryString.stringify(params),
});

// Cấu hình headers
const setHeaders = config => {
  config.headers = {
    Authorization: '',
    Accept: 'application/json',
    ...config.headers,
  };
  return config;
};

// Xử lý lỗi phản hồi
const handleResponse = res => {
  if (res.data && res.status >= 200 && res.status < 300) {
    return res.data;
  }
  return Promise.reject(res.data);
};

// Xử lý lỗi
const handleError = error => {
  const { response } = error;
  return Promise.reject(response?.data || error.message);
};

// Áp dụng interceptor
axiosClient.interceptors.request.use(setHeaders);
axiosClient.interceptors.response.use(handleResponse, handleError);

export default axiosClient;
