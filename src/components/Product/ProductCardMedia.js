import CardMedia from '@mui/material/CardMedia';
import React from 'react';

const ProductCardMedia = ({ imageUrl, name }) => (
  <CardMedia component="img" height="194" image={imageUrl} alt={name} />
);

export default ProductCardMedia;
