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
  styled,
  TableSortLabel,
} from '@mui/material';

const GenericTable = (props) => {
  const { id, columns, data, orderBy, order, onSort, onSelect } = props;

  const createSort = (property) => (event) => {
    onSort(event, property);
  };
  const newData = data.map((row, index) => {
    let rowData = [];
    let i = 0;
    for (const key in row) {
      if (key !== 'id') {
        rowData.push({
          key: columns[i],
          val: row[key],
        });
        i++;
      }
    }
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
    return (
      <StyledTableRow hover>
        {rowData.map((data, index) => (
          <TableCell key={index} aline={data.key.aline}>
            {data.val}
          </TableCell>
        ))}
      </StyledTableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow hover>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                align={col.numeric ? 'right' : 'left'}
                padding={col.disablePadding ? 'none' : 'normal'}
                sortDirection={orderBy === col.id ? order : false}
                // onClick={createSort(col.id)}
              >
                <TableSortLabel
                  active={orderBy === col.id}
                  direction={order ? order : 'asc'}
                  onClick={createSort(col.id)}
                >
                  {col.label}
                </TableSortLabel>
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
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onSort: PropTypes.func,
  onSelect: PropTypes.fun,
};
Table.defaultProps = {
  id: '',
  column: [{ field: '', label: '', align: 'center' }],
  data: [],
  orderBy: '',
  order: 'asc',
  onSort: () => {},
  onSelect: () => {},
};
export default GenericTable;
