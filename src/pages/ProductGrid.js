// src/pages/ProductList.js
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import React from 'react';
import ProductCard from '../components/Product/ProductCard';
import Product_Data from '../ProductData';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function ProductGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '5.5em' }}>
      <Grid container spacing={3}>
        {Product_Data.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item>
              {/* Reutiliza el componente ProductCard para cada producto */}
              <ProductCard key={product.id} product={product} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
