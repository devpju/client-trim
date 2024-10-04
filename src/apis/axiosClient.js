import axios from 'axios';
import queryString from 'query-string';

const baseURL = `http://192.168.1.102/3000`;
const axiosClient = axios.create({
  baseURL,
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async config => {
  config.headers = {
    Authorization: '',
    Accept: 'application/json',
    ...config.headers,
  };

  return config;
});

axios.interceptors.response.use(
  res => {
    if (res.data && res.status >= 200 && res.status < 300) {
      return res.data;
    } else {
      return Promise.reject(res.data);
    }
  },
  error => {
    const { response } = error;
    return Promise.reject(response.data);
  }
);

export default axiosClient;
