import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge, Box, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarStyles';

const NavbarActions = () => {
  const [cartItems] = useState(0);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button sx={styles.navbarButton} component={Link} to="/login" aria-label="Sign in">
        <strong>Sign In</strong>
      </Button>

      <IconButton sx={styles.navbarButton} component={Link} to="/shopping" aria-label="Shopping cart">
        <Badge badgeContent={cartItems} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
    </Box>
  );
};

export default NavbarActions;
