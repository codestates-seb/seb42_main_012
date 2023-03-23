import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-13-124-61-156.ap-northeast-2.compute.amazonaws.com:8080',
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
      console.log('토큰 만료');
      const data = await api.post('/auth/refresh', {
        headers: {
          authorization: localStorage.getItem('refreshToken'),
        },
      });

      localStorage.setItem('accessToken', data.headers.authorization);
      localStorage.setItem(
        'refreshToken',
        data.headers['authorization-refresh'],
      );

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
