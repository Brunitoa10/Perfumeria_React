import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const getAllProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await axios.get(`${API_URL}/products/category/${category}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/products/categories`);
  return response.data;
};

export const getProductDetails = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};
