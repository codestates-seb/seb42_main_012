import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // headers: {
  //   'Content-Type': `application/json`,
  // },
  retryCount: 3,
});

const refreshApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'authorization-refresh': localStorage.getItem('refreshToken'),
  },
  retryCount: 3,
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
      if (error.response.data.status === 5003) {
        return Promise.reject(error);
      }
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
