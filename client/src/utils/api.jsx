import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

const refreshApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'authorization-refresh': localStorage.getItem('refreshToken'),
  },
  timeout: 10000,
});

api.interceptors.response.use(
  res => {
    if (res.headers.authorization) {
      localStorage.setItem('accessToken', res.headers.authorization);
      localStorage.setItem(
        'refreshToken',
        res.headers['authorization-refresh'],
      );
      return res;
    }
    return res;
  },

  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
      await refreshApi.post('/auth/refresh').then(res => {
        localStorage.setItem('accessToken', res.headers.authorization);
        localStorage.setItem(
          'refreshToken',
          res.headers['authorization-refresh'],
        );
      });

      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);

api.interceptors.request.use(
  req => {
    req.headers.authorization = localStorage.getItem('accessToken');
    return req;
  },
  error => Promise.reject(error),
);

export default api;
