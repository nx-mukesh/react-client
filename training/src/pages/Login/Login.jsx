import React, { useState, useEffect } from 'react';
import { loginSchema } from '../../lib/utils/validation';
import {
  Button,
  FormControl,
  Grid,
  Typography,
  FormHelperText,
  TextField,
  CssBaseline,
  InputAdornment,
  IconButton
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [touched] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [hide, setHide] = useState(true)

  useEffect(() => {
    if (touched.email && touched.password) {
      setDisabled(false);
    }
  }, [error]);

  // handler
  const handleError = (values) => {
    const { email, password } = values;
    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then(() => {
        setUserInput({ ...values });
      })
      .catch((error) => {
        const errorSchema = {};
        error.inner.forEach((err) => {
          errorSchema[err.path] = err.message;
          return setError(errorSchema);
        });
      });
  };

  const handleOnBlur = (e, field) => {
    touched[field] = true;
    setError({});
    handleError(userInput);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleShowPassword = () => {
    setUserInput({
      ...userInput,
      showPassword: !userInput.password,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
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
            <form onSubmit={handleSubmit}>
              <div className="login__email">
                <TextField
                  label="Email Address"
                  type="email"
                  id="outlined-email-input"
                  sx={{ mb: 3 }}
                  fullWidth
                  error={error.email}
                  name="email"
                  color="secondary"
                  onBlur={(e) => {
                    handleOnBlur(e, 'email');
                  }}
                  onChange={handleOnChange}
                  helperText={error.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className="login__password">
                <TextField
                  label="Password"
                  id="outlined-password-input"
                  sx={{ mb: 5 }}
                  type="password"
                  fullWidth
                  error={error.password}
                  name="password"
                  color="secondary"
                  value={userInput.password}
                  autoComplete="current-password"
                  onBlur={(e) => {
                    handleOnBlur(e, 'password');
                  }}
                  onChange={handleOnChange}
                  helperText={error.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {hide ? <VisibilityOff /> : <Visibility />}
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button variant="contained" type="submit" fullWidth disabled={disabled}>
                SIGN IN
              </Button>
            </form>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
