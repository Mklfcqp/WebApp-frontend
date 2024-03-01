
import axios from 'axios'
import {jwtDecode} from 'jwt-decode'

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'https://webapp-backend-production.up.railway.app',
  headers: {
    Accept: 'application/json'
  }
})


axiosInstance.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    const decodedToken = jwtDecode(accessToken);
    if (decodedToken.exp < Date.now() / 1000) {
      return axios.post('/auth/refresh-token', { refreshToken: localStorage.getItem('refreshToken') })
        .then(response => {
          localStorage.setItem('accessToken', response.data.accessToken);
          config.headers['Authorization'] = 'Bearer ' + response.data.accessToken; // Corrected line
          return Promise.resolve(config);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      config.headers['Authorization'] = 'Bearer ' + accessToken;
    }
  }
  return config;
}, error => Promise.reject(error));



export default {
  get (path) {
    return axiosInstance({ method: 'get', url: path }).then((response) => {
      return Promise.resolve(response.data.data)
    })
  },
  post (path, data) {
    return axiosInstance({ method: 'post', url: path, data }).then((response) => {
      return Promise.resolve(response.data.data)
    })
  },
  put (path, data) {
    return axiosInstance({ method: 'put', url: path, data }).then((response) => {
      return Promise.resolve(response.data.data)
    })
  },
  delete (path, data) {
    return axiosInstance({ method: 'delete', url: path, data }).then((response) => {
      return Promise.resolve(response.data.data)
    })
  },

}
