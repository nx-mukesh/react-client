import React from 'react';
import { PropTypes } from 'prop-types';
import { Typography } from '@mui/material';

const Math = (props) => {
  const { first, second, operator } = props;
  const result = ({ first, second, operator }) => {
    if (second !== 0) {
      console.log('inSwitch case ..', operator);
      switch (operator) {
        case '+':
          return first + second;
        case '-':
          return first - second;
        case '*':
          return first * second;
        case '/':
          return first / second;
        default:
          return 'Invalid Operation';
      }
    } else {
      return Infinity;
    }
  };

  const handleCustomProps = (props) => {
    if (props.children) {
      return <Typography>{props.children(first, second, operator, result(props))}</Typography>;
    }
    return (
      <Typography>
        {first} {operator} {second} = {result(props)}
      </Typography>
    );
  };

  return <div className="math">{handleCustomProps(props)}</div>;
};

Math.prototypes = {
  first: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
  operators: PropTypes.operators,
  children: PropTypes.func,
};

Math.defaultProp = {
  first: 0,
  second: 0,
  operators: '',
  children: () => {},
};

export default Math;
