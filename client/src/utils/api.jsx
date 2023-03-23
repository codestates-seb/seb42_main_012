import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  res => {
    if (res.headers.authorization && !localStorage.getItem('accessToken')) {
      localStorage.setItem('accessToken', res.headers.authorization);
      localStorage.setItem(
        'refreshToken',
        res.headers['authorization-refresh'],
      );
      return res;
    }
    res.headers.authorization = localStorage.getItem('accessToken');
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
export default api;
