import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import React from 'react';

const ProductCardHeader = ({ name, category, price }) => (
  <CardHeader
    title={name}
    subheader={category}
    action={<Typography variant="h5">{accounting.formatMoney(price, "$")}</Typography>}
  />
);

export default ProductCardHeader;
