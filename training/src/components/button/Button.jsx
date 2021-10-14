import React from 'react';
import { PropTypes } from 'prop-types';

const Button = (props) => {
  const { color, disable, style, value, onClick } = props;
  return <div className="button"></div>;
};
Button.propType = {
  color: PropTypes.string,
  disable: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'primary',
  disable: false,
  style: {},
  value: '',
  onClick: () => {},
};
export default Button;
