import React, { useState, useEffect, useContext } from 'react';
import { TraineeSchema } from '../../../../lib/utils/helper';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  Box,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { SnackContext } from '../../../../context';

const AddDialog = (props) => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    showPassword: false,
  });
  const [enable, setEnable] = useState(true);
  const [touched, setTouched] = useState({});
  const AddSnack = useContext(SnackContext);

  const { open, onClose, onSubmit } = props;

  useEffect(() => {
    if (touched.name && touched.email && touched.password && touched.confirmPassword) {
      setEnable(false);
    }
  }, [touched]);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnBlur = (event) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
  };

  const validateInput = (inputs) => {
    TraineeSchema.validate(inputs, { abortEarly: false })
      .then(() => {
        setInput({ ...input });
      })
      .catch((error) => {
        const errorSchema = {};
        error.inner.map((err) => {
          errorSchema[err.path] = err.message;
          return setErrors(errorSchema);
        });
      });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    validateInput(input);
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="addDialog">
        <Dialog open={open} onClose={onClose}>
          <DialogTitle>Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter yours trainee details</DialogContentText>
            <form
              onSubmit={(event) => {
                onSubmit(event, input);
              }}
            >
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
                  onBlur={handleOnBlur}
                  error={errors.name}
                  helperText={errors.name}
                />
              </div>
              <div className="formInput__email">
                <TextField
                  sx={{ m: 1 }}
                  label="Email Address"
                  variant="outlined"
                  type="email"
                  fullWidth
                  value={input.email}
                  name="email"
                  onChange={handleChange}
                  onBlur={handleOnBlur}
                  error={errors.email}
                  helperText={errors.email}
                />
              </div>
              <div className="formInput__password">
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    helperText={errors.password}
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="start"
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                  <p style={{ color: 'red' }}>{errors.password}</p>
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-Confirm Password"
                    name="confirmPassword"
                    type={values.showPassword ? 'text' : 'password'}
                    value={input.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleOnBlur}
                    helperText={errors.confirmPassword}
                    startAdornment={
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          start="start"
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Confirm Password"
                  />
                  <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
                </FormControl>
              </div>

              <DialogActions>
                <Button type="cancel" variant="filled" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    AddSnack({
                      message: 'Trainee Added successfully',
                      status: 'success',
                    })
                  }
                  disabled={enable}
                >
                  Submit
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </Box>
  );
};

export default AddDialog;
