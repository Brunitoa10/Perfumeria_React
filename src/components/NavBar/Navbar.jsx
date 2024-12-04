import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryMenu from '../../pages/CategoryMenu';
import LoginButton from '../Buttons/LoginButton';
import ShoppingCartButton from '../Buttons/ShoppingCartButton';

export default function ButtonAppBar() {
 
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleViewCart = () => {
    navigate('/shopping-cart');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>

          <CategoryMenu anchorEl={menuAnchorEl} handleClose={handleMenuClose} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            [Nombre Empresa]
          </Typography>

   
          <ShoppingCartButton cartCount={0} onClick={handleViewCart} />

          <LoginButton onLogin={handleLogin} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
