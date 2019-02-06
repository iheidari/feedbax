import axios from 'axios';

const httpClient = axios.create();

httpClient.defaults.baseURL = 'http://localhost:4000';
httpClient.defaults.timeout = 5000;

//default interceptors for requests and responses
httpClient.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  response => {
    if (response.status === 200) return response.data;
    else return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default httpClient;
