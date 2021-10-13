import React from 'react';
import { array, PropsType } from 'prop-types';

const RadioGroup = (props) => {
  const { error, value, onChange, options } = props;
  return <div></div>;
};

RadioGroup.prototype = {
  error: PropsType.string,
  value: PropsType.string,
  onChange: PropsType.func.isRequired,
  options: PropsType.array,
};
RadioGroup.defaultProps = {
  error: '',
  value: '',
  onChange: '',
  options: [],
};

export default RadioGroup;
