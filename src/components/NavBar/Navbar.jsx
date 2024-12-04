import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryMenu from '../../pages/CategoryMenu';

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

          {/* Carrito de compras */}
          <IconButton
            color="inherit"
            aria-label="shopping cart"
            onClick={handleViewCart}
          >
            <Badge badgeContent={0} color="error">
              <MenuItem onClick={handleViewCart}>
                <ShoppingCartIcon />
              </MenuItem>
            </Badge>
          </IconButton>

           {/* Botón de Login */}
           <Button color="inherit" onClick={handleLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
