import Button from '@mui/material/Button';
import React from 'react';

const LoginButton = ({ onLogin }) => (
  <Button color="inherit" onClick={onLogin}>
    Login
  </Button>
);

export default LoginButton;
