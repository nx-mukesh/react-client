import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trainee Portal
          </Typography>
          <Button variant="h6" component="div">
            TRAINEE
          </Button>
          <Button variant="h6" component="div">
            TEXTFIELD DEMO
          </Button>
          <Button variant="h6" component="div">
            INPUT DEMO
          </Button>
          <Button variant="h6" component="div" sx={{ mr: 3 }}>
            CHILDREN DEMO
          </Button>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
