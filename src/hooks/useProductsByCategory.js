import { useEffect, useState } from 'react';
import { getProductsByCategory } from '../services/productService';

const useProductsByCategory = (categoryName) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductsByCategory(categoryName);
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryName]);

  return { products, loading, error };
};

export default useProductsByCategory;