import React, { useState } from 'react';
import { AddDialog } from './components/AddDialog';
import Button from '@mui/material/Button';
import { Navbar } from '../components';

const Trainee = () => {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event, input) => {
    event.preventDefault();
    console.log(input);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="Trainee">
      <Navbar />
      <div className="trainee__Add-traineeBtn">
        <Button
          style={{
            margin: '20px',
            fontSize: '20px',
            color: 'purple',
            border: '1px solid purple',
            borderRadius: '5px',
          }}
          variant="outlined"
          onClick={handleClickOpen}
        >
          ADD TRAINEE
        </Button>
      </div>
      <AddDialog open={open} onClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
};

export default Trainee;
