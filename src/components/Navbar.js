import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavbarStyles';
export default function Navbar() {
  
  return (
    <Box sx={styles.navbarContainer}>
      <AppBar position="fixed" sx={styles.appBar} >
        <Toolbar>
          <IconButton sx={styles.menuButton} size="large" edge="start" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={styles.navbarTitle}>
            Elixir Dorado
          </Typography>
          <Button sx={styles.navbarButton} component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
