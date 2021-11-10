import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("token");
    history.push('/login');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trainee Portal
          </Typography>
          <Link to="/trainee" style={{ textDecoration: 'none', color: 'white' }}>
            {' '}
            <Button variant="h6" component="div">
              TRAINEE
            </Button>
          </Link>
          <Link to="/text-field-demo" style={{ textDecoration: 'none', color: 'white' }}>
            <Button variant="h6" component="div">
              TEXTFIELD DEMO
            </Button>
          </Link>
          <Link to="/input-demo" style={{ textDecoration: 'none', color: 'white' }}>
            <Button variant="h6" component="div">
              INPUT DEMO
            </Button>
          </Link>
          <Link to="/children-demo" style={{ textDecoration: 'none', color: 'white' }}>
            <Button variant="h6" component="div" sx={{ mr: 3 }}>
              CHILDREN DEMO
            </Button>
          </Link>
          <Button color="inherit" onClick={handleLogout}>
            LOGOUT
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
