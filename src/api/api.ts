import axios from 'axios';
export const baseURL = 'http://localhost:4000';

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;