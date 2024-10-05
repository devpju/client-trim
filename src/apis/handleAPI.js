import axiosClient from './axiosClient';

const handleAPI = async (url, data = {}, method = 'get', options = {}) => {
  try {
    const response = await axiosClient(url, {
      method,
      data,
      ...options,
    });
    return response;
  } catch (error) {
    console.error(`Lỗi khi gọi API ${url}:\n`, error);
    throw error;
  }
};

export default handleAPI;
