import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

const fetchData = async (url) => {
  let result = { data: [], error: null };

  try {
    const response = await axios.get(url);
    result.data = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    result.error = error;
  }

  return result;
};

export const getAllProducts = async () => {
  const { data, error } = await fetchData(`${API_URL}/products`);
  if (error) {
    console.error('Error fetching all products:', error);
  }
  return data;
};

export const getProductsByCategory = async (category) => {
  const { data, error } = await fetchData(`${API_URL}/products/category/${category}`);
  if (error) {
    console.error(`Error fetching products for category ${category}:`, error);
  }
  return data;
};

export const getCategories = async () => {
  const { data, error } = await fetchData(`${API_URL}/products/categories`);
  if (error) {
    console.error('Error fetching categories:', error);
  }
  return data;
};

export const getProductDetails = async (id) => {
  const { data, error } = await fetchData(`${API_URL}/products/${id}`);
  if (error) {
    console.error(`Error fetching details for product ${id}:`, error);
  }
  return data;
};