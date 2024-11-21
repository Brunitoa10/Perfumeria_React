import { Card, Collapse } from '@mui/material';
import React, { useState } from 'react';
import ProductCardActions from './ProductCardActions';
import ProductCardDetails from './ProductCardDetails';
import ProductCardHeader from './ProductCardHeader';
import ProductCardMedia from './ProductCardMedia';

const ProductCard = ({ product, onAddToCart }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        //border: 'none',
       // boxShadow: 'none',
       // margin: '1em',
        width: '100%',
        //borderRadius: '8px',
      }}
    >
      <ProductCardMedia image={product.image} title={product.title} />
      
      <ProductCardHeader product={product} />

      <ProductCardActions
        handleExpandClick={handleExpandClick}
        handleAddToCart={handleAddToCart}
        expanded={expanded}
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ProductCardDetails description={product.description} />
      </Collapse>
    </Card>
  );
};

export default ProductCard;
