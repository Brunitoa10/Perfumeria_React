import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/Product/ProductCard';
import { getAllProducts } from '../services/productService';

const Item = styled(Paper)(() => ({
  textAlign: 'center',
  borderRadius: '8px',
}));

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, marginTop: '4em', padding: '1em', backgroundColor: '#9c9c9c'}}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Item>
              <ProductCard product={product} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
