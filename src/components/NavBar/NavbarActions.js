import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarStyles';

const NavbarActions = () => (
  <>
    <Button sx={styles.navbarButton} component={Link} to="/login">
      <strong>Sign In</strong>
    </Button>
    <ShoppingCart />
  </>
);

export default NavbarActions;
