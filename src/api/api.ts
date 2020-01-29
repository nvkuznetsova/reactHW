import axios from 'axios';
const baseURL = 'http://localhost:4000';

export const getProducts = () => {
  return axios.get(`${baseURL}/products`, {
    headers: { 'Content-Type': 'application/json' }
  })
}