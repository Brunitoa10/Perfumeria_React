import { Box, CardContent, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import TextCarousel from '../Carrusel/TextCarousel ';


const ProductCardHeader = ({ product }) => {
  const titleRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Comprobar si el texto del título excede el ancho de la tarjeta
    if (titleRef.current) {
      const isTitleOverflowing = titleRef.current.scrollWidth > titleRef.current.clientWidth;
      setIsOverflowing(isTitleOverflowing);

      // Si el texto excede el ancho, activar el carrusel después de 2 segundos
      if (isTitleOverflowing) {
        const timer = setTimeout(() => {
          setStartAnimation(true);
        }, 0.5); // Retraso de 1 segundos antes de empezar la animación

        return () => clearTimeout(timer); // Limpiar el temporizador
      }
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
        {isOverflowing && startAnimation ? (
          // Si el título excede, activar el carrusel
          <TextCarousel text={product.title} />
        ) : (
          // Si el título no excede, mostrarlo sin movimiento
          <Typography
            ref={titleRef}
            variant="h6"
            noWrap
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
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
      <Typography variant="h6" color="secundary" sx={{ fontWeight: 'bold', marginTop: '1em', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
        ${product.price}
      </Typography>
    </CardContent>
  );
};

export default ProductCardHeader;
