import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

export default function ButtonAppBar() {
  const [cartItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
  ]);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate(); // Inicializa useNavigate

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorEl(null);
  };

  const handleViewCart = () => {
    handleCartClose();
    navigate('/shopping-cart'); // Redirige a la página del carrito
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
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            [Nombre Empresa]
          </Typography>

          {/* Carrito de compras */}
          <IconButton
            color="inherit"
            aria-label="shopping cart"
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Menú desplegable del carrito */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCartClose}
            PaperProps={{
              style: {
                maxHeight: 300,
                width: '250px',
              },
            }}
          >
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <MenuItem key={item.id}>
                  {item.name} - ${item.price}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled>No hay productos en el carrito</MenuItem>
            )}
            <MenuItem onClick={handleViewCart}>
              <Typography color="primary">Ver Carrito</Typography>
            </MenuItem>
          </Menu>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
