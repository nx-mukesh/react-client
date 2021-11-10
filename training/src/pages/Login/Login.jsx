import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { apiCall } from '../../lib';
import { LoginSchema } from '../../lib/utils/helper';
import {
  Button,
  FormControl,
  Grid,
  Typography,
  TextField,
  CssBaseline,
  InputAdornment,
  IconButton,
  CircularProgress,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { SnackContext } from '../../context';

const Login = () => {
  const SnackBar = useContext(SnackContext);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [loader, setLoader] = useState(false);
  const [touched, setTouched] = useState({});
  const [enable, setEnable] = useState(true);
  const [values, setValues] = useState({
    showPassword: false,
  });
  const history = useHistory();

  useEffect(() => {
    if (touched.email && touched.password) {
      setEnable(false);
    }
  }, [touched]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  /**
   *@description throw errors if violate rule
   * @param {*} values Takes userInput for validation
   * @return object of error if any
   */
  const handleError = (values) => {
    LoginSchema.validate({ ...values }, { abortEarly: false })
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

  const handleOnBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
    handleError(userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    try {
      apiCall(userInput).then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        setLoader(false);
        history.push('/trainee');
      });
    } catch (error) {
      setLoader(false);
      setEnable(true);
      SnackBar(error.message);
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
                  onBlur={handleOnBlur}
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
                  type={values.showPassword ? 'text' : 'password'}
                  fullWidth
                  error={error.password}
                  name="password"
                  color="secondary"
                  value={userInput.password}
                  onBlur={handleOnBlur}
                  onChange={handleOnChange}
                  helperText={error.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                disabled={enable}
                style={{ color: 'white' }}
              >
                {loader ? <CircularProgress /> : 'SIGN IN'}
              </Button>
            </form>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
