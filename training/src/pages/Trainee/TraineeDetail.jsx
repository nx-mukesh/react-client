import React from 'react';
import moment from 'moment';
import { withRouter, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import traineeData from './data/trainee';

const TraineeDetail = (props) => {
  const { id } = props.match.params;
  const data = traineeData.filter((data) => data.id === id);

  const getDateFormatted = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  };
  return (
    <div
      className="traineeDetail"
      style={{ display: 'flex', flexDirection: 'column', marginTop: '25px' }}
    >
      <div
        className="traineeDetail__box"
        style={{
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '5px',
          boxShadow: '0px 0px 1px 1px grey',
        }}
      >
        <div
          className="traineeDetail__image"
          style={{ margin: '2rem', width: '100px', height: '100px', border: '1px solid grey' }}
        >
          <img src={data[0].image} alt="" style={{ background: 'grey' }} />
        </div>
        <div className="traineeDetail__info">
          <div style={{ fontSize: '2.5rem', margin: '30px 5px 5px 5px' }}>{data[0].name}</div>
          <div style={{ fontSize: '1rem', margin: '5px', color: 'grey' }}>
            {getDateFormatted(data[0].createdAt)}
          </div>
          <div style={{ fontSize: '1.5rem', margin: '5px' }}>{data[0].email}</div>
        </div>
      </div>
      <div className="traineeDetail__button">
        <center>
          <Link to="/trainee">
            <Button variant="outlined" sx={{ mt: 5 }} size="large">
              Back
            </Button>
          </Link>
        </center>
      </div>
    </div>
  );
};

export default withRouter(TraineeDetail);
