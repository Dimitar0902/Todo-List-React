import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import '../component styles/navbar.css'; 

const Navbar = () => {
  return (
    <Drawer variant="permanent" anchor="left" className="sidebar">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/todos">
          <ListItemText primary="Todos" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Navbar;
