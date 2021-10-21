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
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [touched] = useState({});
  const [disabled, setDisabled] = useState(false);


  useEffect(() => {
    console.log(userInput)
    console.log(touched);
    console.log(error);
    if (Object.keys(error).length === 0 && touched) {
      setDisabled(true);
    }
  }, [touched]);

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
    console.log(userInput)
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
                />
              </div>
              <div className="login__password">
                <TextField
                  label="Password"
                  id="outlined-password-input"
                  sx={{ mb: 5 }}
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
