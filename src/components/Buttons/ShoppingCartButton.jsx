import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import React from 'react';

const ShoppingCartButton = ({ cartCount, onClick }) => (
  <IconButton color="inherit" aria-label="shopping cart" onClick={onClick}>
    <Badge badgeContent={cartCount} color="error">
      <ShoppingCartIcon />
    </Badge>
  </IconButton>
);

export default ShoppingCartButton;
