import React, { useContext } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { SnackContext } from '../../../../context';

const SnackDeleteProps = {
  message: 'Trainee data deleted',
  status: 'warning',
};
const RemoveDialog = (props) => {
  const WarnSnackBar = useContext(SnackContext);
  const { open, onClose } = props;
  return (
    <div className="removeDialog">
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Remove Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to remove trainee?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={()=>WarnSnackBar(SnackDeleteProps)} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RemoveDialog;
