import axios from 'axios';

const service = axios.create({
  withCredentials: true,
  timeout: 10000, // request timeout
});

// request interceptors
service.interceptors.request.use(
  async config => {
    let token = window.localStorage.getItem('token');

    if (token) {
      config.headers.common.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

// response interceptors
service.interceptors.response.use(
  async response => {        
    // 如果不是 200 或 201 則視為錯誤
    if (([200, 201].includes(response.status))) {
      const { headers, data } = response;
      const { authorization } = headers;
      
      // 把 token 存到 localStorage
      if (authorization) { 
        window.localStorage.setItem('token', authorization);
      }
      return data;
    }
    else {
      window.localStorage.removeItem('token');
      return Promise.reject(new Error(res.message || 'Error'));
    }

  },
  async error => {
    // error handler
    return Promise.reject(error);
  }
);

export default service;
