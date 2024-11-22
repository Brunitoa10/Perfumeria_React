import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { getAllProducts } from '../../services/productService';
import ProductCard from './ProductCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProductGrid() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Item>
              <ProductCard
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
                category={product.category}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
