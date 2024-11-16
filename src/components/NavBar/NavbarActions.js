import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Box, Button, IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarStyles';

const NavbarActions = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Button sx={styles.navbarButton} component={Link} to="/login" aria-label="Sign in">
        <strong>Sign In</strong>
      </Button>

      <IconButton sx={styles.navbarButton} component={Link} to="/shopping" aria-label="Shopping cart">
        <ShoppingCart />
      </IconButton>
    </Box>
  );
};

export default NavbarActions;
