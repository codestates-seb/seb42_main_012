import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-13-124-61-156.ap-northeast-2.compute.amazonaws.com:8080',
});

api.interceptors.response.use(
  res => {
    localStorage.setItem('accessToken', res.headers.authorization);
    localStorage.setItem('refreshToken', res.headers['authorization-refresh']);
    return res;
  },

  async error => {
    if (error.response.status === 401) {
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

      return api(data.config);
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
