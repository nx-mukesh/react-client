import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';

const AddDialog = (props) => {
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { open, onClose, onSubmit } = props;

  const handleClickOpen = () => {
    // setOpen(true);
  };

  const handleChange = (e) => {
    // setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
    console.log(input);
  };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const endAdornment = ()=>{
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={handleMouseDownPassword}
        edge="end"
      >
        {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
      </IconButton>
    </InputAdornment>;
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="addDialog">
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter yours trainee details</DialogContentText>
            <form>
              <div className="formInput__name">
                <TextField
                  sx={{ m: 1 }}
                  label="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="demo-helper-text-aligned"
                  value={input.name}
                  name="name"
                  onChange={handleChange}
                />
              </div>
              {/* </FormControl> */}
              <div className="formInput__email">
                {/* <FormControl sx={{ m: 1 , width:"auto"}} variant="outlined"> */}
                <TextField
                  sx={{ m: 1 }}
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  value={input.email}
                  name="email"
                  onChange={handleChange}
                />
                {/* </FormControl> */}
              </div>
              <div className="formInput__password">
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-Confirm Password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                  />
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <Button variant="contained" onClick={onClose}>
                    Cancel
                  </Button>
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <Button type="submit" variant="contained" color="primary">
                    Sign Up
                  </Button>
                </FormControl>
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
};

export default AddDialog;
