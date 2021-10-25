import React from 'react';
import { PropTypes } from 'prop-types';
import { style } from './style';

const Button = (props) => {
  const { disabled, style, onClick } = props;

  return (
    <div className="button" style={style.button__submit}>
      <button
        className="button__cancel"
        style={{ color: 'black', background: 'grey', margin: '5px', padding: '5px' }}
      >
        Cancel
      </button>
      <button
        style={style}
        onClick={onClick}
        disabled={disabled}
      >
        Submit
      </button>
    </div>
  );
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
