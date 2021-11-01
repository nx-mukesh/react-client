import React, { createContext, useState } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

/**
 * @SnackContext hold state of snackBar and messages.
 */
export const SnackContext = createContext();

/**
 *@description SnackBar method
 * @returns Snack Component
 */

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackBars = (props) => {
  const { open, message, status, onClose } = props;
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert severity={status} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

/**
 * @description SnackBar Context Provider
 */
const SnackBarProvider = (props) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('success');
  const [message, setMessage] = useState(false);

  const handleChange = ({ message, status }) => {
    setOpen(true);
    setStatus(status);
    setMessage(message);
    return;
  };
  const handleClose = (event, reason) => {
    if (reason === 'click-away') {
      return;
    }
    return setOpen(false);
  };

  return (
    <React.Fragment>
      <SnackContext.Provider value={handleChange}>{props.children}</SnackContext.Provider>
      <SnackBars open={open} message={message} status={status} onClose={handleClose} />
    </React.Fragment>
  );
};
export default SnackBarProvider;
