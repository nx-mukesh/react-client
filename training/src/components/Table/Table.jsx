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
  TablePagination,
  Button,
} from '@mui/material';
const GenericTable = (props) => {
  const {
    id,
    columns,
    data,
    orderBy,
    order,
    onSort,
    onSelect,
    actions,
    count,
    page,
    onChangePage,
    rowsPerPage,
  } = props;

  const createSort = (property) => (event) => {
    onSort(event, property);
  };
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
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  align={column.align}
                >
                  <TableSortLabel
                    active={orderBy}
                    direction={order ? order : 'asc'}
                    onClick={createSort(column.id)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.field];
                    return (
                      <TableCell key={column.field} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                  {actions.map((action) => {
                    return (
                      <TableCell>
                        <Button type="submit" value={row} onClick={action.handler}>
                          {action.icon}
                        </Button>
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onChangePage}
      />
    </Paper>
  );
};

Table.prototype = {
  id: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onSort: PropTypes.func,
  onSelect: PropTypes.func,
  page: PropTypes.number,
  count: PropTypes.number,
  action: PropTypes.func,
  rowsPerPage: PropTypes.number,
  handleChangePage: PropTypes.func,
};
Table.defaultProps = {
  id: '',
  column: [{ field: '', label: '', align: 'center' }],
  data: [],
  orderBy: '',
  order: 'asc',
  page: 0,
  rowsPerPage: 100,
  action: () => {},
  onSort: () => {},
  onSelect: () => {},
  onChangePage: () => {},
};
export default GenericTable;
