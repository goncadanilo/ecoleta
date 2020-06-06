import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/v1',
});

export default api;
