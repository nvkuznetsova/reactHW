import api, { baseURL } from './api';

export const getProducts = () => {
  return api.get(`${baseURL}/products`);
}
