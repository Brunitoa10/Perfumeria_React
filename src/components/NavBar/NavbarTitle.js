import Typography from '@mui/material/Typography';
import React from 'react';
import styles from './NavbarStyles';

const NavbarTitle = () => (
  <Typography variant="h6" component="div" sx={styles.navbarTitle}>
    Elixir Dorado
  </Typography>
);

export default NavbarTitle;
