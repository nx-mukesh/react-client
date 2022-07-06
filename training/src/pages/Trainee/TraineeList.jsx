import React, { useState } from 'react';
import Button from '@mui/material/Button';
import moment from 'moment';
import { GenericTable } from '../../components';
import traineesData from './data/trainee';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AddDialog, EditDialog, RemoveDialog } from './components';

const TraineeList = () => {
  const [editOpen, setEditOpen] = useState(false);
  const [Open, setOpen] = useState(false);
  const [removeOpen, setRemoveOpen] = useState(false);
  const [updateValue, setUpdateValue] = useState(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(100);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRemoveSubmit = (event, input) => {
    event.preventDefault();
    console.log(input);
  };
  const handleEditSubmit = (event, input) => {
    event.preventDefault();
    console.log(input);
  };
  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setUpdateValue({ ...updateValue, [name]: value });
    console.log(updateValue);
  };
  const getDateFormatted = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleRemoveClose = () => {
    setRemoveOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event, input) => {
    event.preventDefault();
    console.log('submit', input);
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
  const handleEditDialogOpen = (event) => {
    event.preventDefault();
    const { value } = event.target;
    console.log(value);
    setEditOpen(true);
  };
  const handleRemoveDialogOpen = () => {
    setRemoveOpen(true);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
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
      <AddDialog open={Open} onClose={handleClose} onSubmit={handleSubmit} />
      <EditDialog
        open={editOpen}
        onClose={handleEditClose}
        value={updateValue}
        handleChange={handleEditChange}
        onSubmit={handleEditSubmit}
      />
      <RemoveDialog open={removeOpen} onClose={handleRemoveClose} onSubmit={handleRemoveSubmit} />
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
          actions={[
            {
              icon: <EditIcon />,
              handler: handleEditDialogOpen,
            },
            {
              icon: <DeleteIcon />,
              handler: handleRemoveDialogOpen,
            },
          ]}
          orderBy={orderBy}
          order={order}
          onSort={handleSort}
          onSelect={handleSelect}
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default TraineeList;
