import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['home', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

const CategoryMenu = ({ anchorEl, handleClose }) => (
  <Menu
  anchorEl={anchorEl}
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  {categories.map((category) => (
    <MenuItem key={category} onClick={handleClose}>
      <Link
        to={category === 'home' ? '/' : `/category/${category}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {capitalize(category)}
      </Link>
    </MenuItem>
  ))}
</Menu>
);


export default CategoryMenu;
