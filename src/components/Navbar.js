import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'; // Asegúrate de que la ruta sea correcta

export default function Navbar() {
  return (
    <Box className={styles.navbarContainer}>
      <AppBar position="static">
        <Toolbar>
          <IconButton  className={styles.menuButton} size="large"  edge="start"  color="inherit" aria-label="menu" >
            <MenuIcon />
          </IconButton>
          <Typography   variant="h6" component="div" className={styles.navbarTitle}>
            Perfumeria TITO
          </Typography>
          {/* Botón Login sin sx, solo usando la clase CSS */}
          <Button className={styles.navbarButton} color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
