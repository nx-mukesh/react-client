import React, { useState } from 'react';
import { loginSchema } from '../../lib/utils/validation';
import {
  Button,
  FormControl,
  Grid,
  Typography,
  FormHelperText,
  TextField,
  CssBaseline,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';





const Login = () => {
  const [userInput, setUserInput] = useState({
    email:'',
    password:''
  });
  const [error, setError] = useState('');

  // handler
  const handleOnBlur = (e) => {
    console.log('onblur');
  };
  const handleOnChange = (e) => {
    const { value } = e.target;
    setUserInput({ ...userInput, [e.target.name]: value });
    loginSchema.validate(userInput)
    console.log(userInput);
  };

  const handleShowPassword = () => {
    setUserInput({
      ...userInput,
      showPassword: !userInput.password,
    });
  };

  return (
    <div className="login">
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ my: 5, mx: 'auto', vertical: 'center' }}
      >
        <Grid item xs={2}>
          <FormControl sx={{ mt: 5, p: 5, width: '50ch', boxShadow: 3 }} variant="outlined">
            <Grid item xs={2} sx={{ alignSelf: 'center', color: 'red' }}>
              <LockRoundedIcon />
            </Grid>
            <Grid item xs={2} sx={{ alignSelf: 'center', mb: 5 }}>
              <Typography variant="h4" component="h5">
                Login
              </Typography>
            </Grid>
            <div className="login__email">
              <TextField
                id="outlined-required"
                sx={{ mb: 3 }}
                fullWidth
                name="email"
                label="Email Address"
                onBlur={handleOnBlur}
                onChange={handleOnChange}
              />
              <FormHelperText>{error}</FormHelperText>
            </div>
            <div className="login__password">
              <TextField
                label="Password"
                type={userInput.password ? 'text' : 'password'}
                value={userInput.password}
                sx={{ mb: 5 }}
                id="outlined-password-input"
                fullWidth
                name="password"
                autoComplete="current-password"
                onBlur={handleOnBlur}
                onChange={handleOnChange}
                endAdornment={
                  <Visibility onClick={handleShowPassword}/>
                }
              />
              <FormHelperText>{error}</FormHelperText>
            </div>
            <Button variant="contained" fullWidth disabled={false}>
              SIGN IN
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
