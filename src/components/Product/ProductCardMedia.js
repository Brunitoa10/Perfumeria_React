import { CardMedia } from '@mui/material';
import React from 'react';

const ProductCardMedia = ({ image, title }) => {
  return (
    <CardMedia
      component="img"
      alt={title}
      height="200"
      image={image}
      sx={{ objectFit: 'contain', width: '100%' }}
    />
  );
};

export default ProductCardMedia;
