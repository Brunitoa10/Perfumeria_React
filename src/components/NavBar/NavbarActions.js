import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarStyles';

const NavbarActions = () => {
  // Estado para manejar la cantidad de productos en el carrito
  const [cartItems, setCartItems] = useState(0);

  // Función para simular agregar productos al carrito
  const handleAddToCart = () => {
    setCartItems(cartItems + 1); // Incrementa el número de productos en el carrito
  };

  // Función para simular quitar productos del carrito (solo si hay productos en el carrito)
  const handleRemoveFromCart = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1); // Decrementa el número de productos en el carrito
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button sx={styles.navbarButton} component={Link} to="/login" aria-label="Sign in">
        <strong>Sign In</strong>
      </Button>

      {/* Ícono del carrito con el Badge que muestra la cantidad de artículos */}
      <IconButton sx={styles.navbarButton} component={Link} to="/shopping" aria-label="Shopping cart">
        <Badge badgeContent={cartItems} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>

      {/* Botón para agregar un producto al carrito */}
      <Button onClick={handleAddToCart}>Add Product</Button>

      {/* Botón para quitar un producto del carrito */}
      <Button onClick={handleRemoveFromCart} disabled={cartItems === 0}>Remove Product</Button>
    </Box>
  );
};

export default NavbarActions;
