import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CardActions, IconButton } from '@mui/material';
import React from 'react';

const ProductCardActions = ({ handleExpandClick, handleAddToCart, expanded }) => {
  return (
    <CardActions
      sx={{
        justifyContent: 'center',
        paddingBottom: '1em',
      }}
    >
      {/* Botón para expandir y mostrar más detalles */}
      <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
        <ExpandMoreIcon />
      </IconButton>

      {/* Botón para agregar al carrito */}
      <IconButton onClick={handleAddToCart} aria-label="add to cart">
        <ShoppingCartIcon />
      </IconButton>
    </CardActions>
  );
};

export default ProductCardActions;
