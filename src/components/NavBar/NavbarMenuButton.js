import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import styles from './NavbarStyles';

const NavbarMenuButton = () => (
  <IconButton sx={styles.menuButton} size="large" edge="start" aria-label="menu">
    <MenuIcon />
  </IconButton>
);

export default NavbarMenuButton;
