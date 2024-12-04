import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';

const NavMenu = ({ anchorEl, handleClose, onNavigate }) => {
  const isOpen = Boolean(anchorEl);

  const handleMenuClick = (category) => {
    onNavigate(`/category/${category}`);
    handleClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={isOpen}
      onClose={handleClose}
    >
      <MenuItem onClick={() => handleMenuClick('electronics')}>Electronics</MenuItem>
      <MenuItem onClick={() => handleMenuClick('fashion')}>Fashion</MenuItem>
      <MenuItem onClick={() => handleMenuClick('home')}>Home</MenuItem>
    </Menu>
  );
};

export default NavMenu;
