import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/Product/ProductCard';
import useProductsByCategory from '../hooks/useProductsByCategory';

const Item = styled(Paper)(() => ({
  textAlign: 'center',
  borderRadius: '8px',
}));

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products, loading, error } = useProductsByCategory(categoryName);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{categoryName}</h1>
      <Box sx={{ flexGrow: 1, marginTop: '-1.4em', padding: '1em', backgroundColor: '#9c9c9c'}}>
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
    </div>
  );
};

export default CategoryPage;