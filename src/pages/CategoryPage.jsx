import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/Product/ProductCard';
import { getAllProducts } from '../services/productService';


const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      const filteredProducts = data.filter(product => product.category === category);
      setProducts(filteredProducts);
    };

    fetchProducts();
  }, [category]);

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      {/* Centrar el título y capitalizar la categoría */}
      <Typography variant="h4" align="center" sx={{ marginBottom: 3 }}>
        {capitalize(category)} Products
      </Typography>
      <Grid container spacing={3}>
        {products.length === 0 ? (
          <Typography variant="h6" color="text.secondary" align="center" sx={{ width: '100%' }}>
            No products found in this category.
          </Typography>
        ) : (
          products.map((product) => (
            <Grid item xs={8} sm={6} md={4} lg={3} key={product.id}>
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                  />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default CategoryPage;