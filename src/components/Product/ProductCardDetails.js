import { CardContent, Typography } from '@mui/material';
import React from 'react';

const ProductCardDetails = ({ description }) => {
  return (
    <CardContent>
      <Typography paragraph>
        {description || 'No description available.'}
      </Typography>
    </CardContent>
  );
};

export default ProductCardDetails;
