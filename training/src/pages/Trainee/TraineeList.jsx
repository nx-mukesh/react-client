import React, { useState } from 'react';
import Button from '@mui/material/Button';
import moment from 'moment';
import { GenericTable } from '../../components';
import { AddDialog } from './components';
import traineesData from './data/trainee';

const TraineeList = () => {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);

  const handleSubmit = (event, input) => {
    event.preventDefault();
    console.log(input);
  };
  const getDateFormatted = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelect = (event) => {
    if (event.target.checked) {
      const newSelected = traineesData.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
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
              format: (value) => value && value.toUpperCase(),
            },
            {
              field: 'createdAt',
              label: 'Date',
              aline: 'right',
              format: getDateFormatted,
            },
          ]}
          orderBy={orderBy}
          order={order}
          onSort={handleSort}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};

export default TraineeList;
