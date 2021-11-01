import React, { useContext } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { SnackContext } from '../../../../context';

const EditDialog = (props) => {
  const { open, onClose, handleChange, value } = props;
  const SnackBar = useContext(SnackContext);

  const SnackProps = {
    message: 'Trainee Edited Successfully',
    status: 'success',
  };
  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle>Edit Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your trainee details</DialogContentText>
          <TextField
            sx={{ m: 1 }}
            label="Name"
            variant="outlined"
            required
            fullWidth
            id="demo-helper-text-aligned"
            value={value.name}
            name="name"
            onChange={handleChange}
            onBlur={'handleOnBlur'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ m: 1 }}
            label="Email Address"
            variant="outlined"
            type="email"
            fullWidth
            value={value.email}
            name="email"
            onChange={handleChange}
            onBlur={'handleOnBlur'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => SnackBar(SnackProps)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditDialog;
