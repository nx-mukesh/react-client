import React from 'react';
import { PropTypes } from 'prop-types';
import {
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
const GenericTable = (props) => {
  const { id, columns, data } = props;
  const newData = data.map((row, index) => {
    let rowData = [];
    let i = 0;
    for (const key in row) {
      if (key === 'name' || key === 'email') {
        rowData.push({
          key: columns[i],
          val: row[key],
        });
        i++;
      }
    }
    return (
      <TableRow>
        {rowData.map((data, index) => (
          <TableCell key={index} aline={data.key.aline}>
            {data.val}
            {console.log(data)}
          </TableCell>
        ))}
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col, index) => (
              <TableCell key={`${id}${index}`} aline={col.aline}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{newData}</TableBody>
      </Table>
    </TableContainer>
  );
};

Table.prototype = {
  id: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
};
Table.defaultProps = {
  id: '',
  column: [{ field: '', label: '', align: 'center' }],
  data: [],
};
export default GenericTable;
