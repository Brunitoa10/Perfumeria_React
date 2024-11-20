import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

const CategoryMenu = ({ anchorEl, handleClose }) => (
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
  >
    {categories.map((category) => (
      <MenuItem key={category} onClick={handleClose}>
        <Link to={`/category/${category}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          {category}
        </Link>
      </MenuItem>
    ))}
  </Menu>
);

export default CategoryMenu;
