import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/productService';
import ProductCard from './ProductCard';

export default function ProductGrid({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const isOverflowing = (text) => {
    const tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.position = 'absolute';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.textContent = text;

    document.body.appendChild(tempSpan);
    const isOverflow = tempSpan.offsetWidth > 240; // Ajusta según el ancho de la tarjeta
    document.body.removeChild(tempSpan);

    return isOverflow;
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2, textAlign: 'center' }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={8} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
              category={product.category}
              onAddToCart={() => addToCart(product)}
              isTitleOverflowing={isOverflowing(product.title)} // Pasa esta información a ProductCard
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
