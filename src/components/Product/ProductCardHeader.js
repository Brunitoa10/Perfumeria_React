import { Box, CardContent, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import TextCarousel from '../Carrusel/TextCarousel ';


const ProductCardHeader = ({ product }) => {
  const titleRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    // Comprobar si el texto del título excede el ancho de la tarjeta
    if (titleRef.current) {
      const isTitleOverflowing = titleRef.current.scrollWidth > titleRef.current.clientWidth;
      setIsOverflowing(isTitleOverflowing);
    }
  }, [product.title]);

  return (
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '1em',
        textAlign: 'center',
      }}
    >
      {/* Título del Producto - Carrusel si el texto es largo */}
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        {isOverflowing ? (
          <TextCarousel text={product.title} />
        ) : (
          <Typography
            ref={titleRef}
            variant="h6"
            noWrap
            sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.25rem' } }}
          >
            {product.title}
          </Typography>
        )}
      </Box>

      {/* Categoría */}
      <Typography variant="body2" color="textSecondary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
        {product.category}
      </Typography>

      {/* Precio */}
      <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold', marginTop: '1em', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
        ${product.price}
      </Typography>
    </CardContent>
  );
};

export default ProductCardHeader;
