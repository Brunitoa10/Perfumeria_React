import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarStyles';

const NavbarMenuButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        sx={styles.menuButton}
        size="large"
        edge="start"
        aria-label="menu"
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        
        <MenuItem component={Link} to="/category/perfume-men" onClick={handleMenuClose}>
          Men's perfume
        </MenuItem>
        <MenuItem component={Link} to="/category/perfume-women" onClick={handleMenuClose}>
          Women's perfume
        </MenuItem>
      </Menu>
    </>
  );
};

export default NavbarMenuButton;
