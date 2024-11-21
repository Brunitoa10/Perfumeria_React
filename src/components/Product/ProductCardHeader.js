import { Box, CardContent, Typography } from '@mui/material';
import React, { useRef } from 'react';
import useTextOverflow from '../../hooks/useTextOverflow';
import TextCarousel from '../Carrusel/TextCarousel ';

const ProductCardHeader = ({ product }) => {
  const titleRef = useRef(null);
  const { isOverflowing, startAnimation } = useTextOverflow(titleRef);

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
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        {isOverflowing && startAnimation ? (
          <TextCarousel text={product.title} />
        ) : (
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

      <Typography variant="body2" color="textSecondary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
        {product.category}
      </Typography>

      <Typography
        variant="h6"
        color="#000000"
        sx={{ fontWeight: 'bold', marginTop: '1em', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}
      >
        ${product.price}
      </Typography>
    </CardContent>
  );
};

export default ProductCardHeader;
