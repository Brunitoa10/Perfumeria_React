import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import NavbarActions from './NavbarActions';
import NavbarGreeting from './NavbarGreeting';
import NavbarMenuButton from './NavbarMenuButton';
import styles from './NavbarStyles';
import NavbarTitle from './NavbarTitle';

const Navbar = () => {
  return (
    <Box sx={styles.navbarContainer}>
      <AppBar position="fixed" sx={styles.appBar}>
        <Toolbar>
          <NavbarMenuButton />
          <NavbarTitle />
          <NavbarGreeting />
          <NavbarActions />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
