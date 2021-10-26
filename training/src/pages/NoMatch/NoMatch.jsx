import React from 'react';
import { Typography } from '@mui/material';

const NoMatch = () => {
  return (
    <div className="noMatch">
      <center>
        <Typography variant="h2" gutterBottom component="div">
          Not Found
        </Typography>
        <h3>Seems like the page you are looking after does not exist</h3>
      </center>
    </div>
  );
};

export default NoMatch;
