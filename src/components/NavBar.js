
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="home">
        <HomeIcon />
      </IconButton>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Prodactivity
      </Typography>
      <Link to="/login" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }}>Login</Link>
      <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
    </Toolbar>
  </AppBar>
);

export default NavBar;
