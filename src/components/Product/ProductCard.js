import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import ProductCardActions from './ProductCardActions';
import ProductCardDetails from './ProductCardDetails';
import ProductCardHeader from './ProductCardHeader';
import ProductCardMedia from './ProductCardMedia';

const ProductCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <ProductCardHeader  name={product.name} category={product.category} price={product.price}/>
      <ProductCardMedia imageUrl={product.imageUrl} name={product.name}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <ProductCardActions expanded={expanded} onExpandClick={handleExpandClick}/>
      <ProductCardDetails expanded={expanded} details={product.details} />
    </Card>
  );
};

export default ProductCard;
