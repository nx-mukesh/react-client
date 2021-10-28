import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GenericTable } from '../../components';
import { AddDialog } from './components';
import traineesData from './data/trainee';

const TraineeList = () => {
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
    <div className="traineeList">
      <div className="traineeList__Add-traineeBtn">
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
      <div className="traineeList__table">
        <GenericTable
          id="id"
          data={traineesData}
          columns={[
            {
              field: 'name',
              label: 'Name',
              align: 'center',
            },
            {
              field: 'email',
              label: 'Email Address',
            },
          ]}
        />
      </div>

      <div className="traineeList__trainee">
        {traineesData.map((trainee) => (
          <ul className="traineeList__traineeName" key={trainee.id}>
            <Link to={`trainee/${trainee.id}`}>
              <li>{trainee.name}</li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default TraineeList;
