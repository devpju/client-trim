import axiosClient from './apiClient';

const handleAPI = async (endpoint, payload = {}, httpMethod = 'get', config = {}) => {
  try {
    const response = await axiosClient(endpoint, {
      method: httpMethod,
      data: payload,
      ...config,
    });
    return response;
  } catch (error) {
    console.error(`Error while calling API ${endpoint}:\n`, error);
    throw error;
  }
};

export default handleAPI;
