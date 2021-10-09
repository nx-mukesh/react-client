import React from 'react';
import PropTypes from 'prop-types';
import { style } from './style';

const TextField = (props) => {
  const { value, error, disable } = props;
  return (
    <div className="textField" style={style.textField}>
      <input
        className="testField__input"
        style={style.testField__input}
        type="text"
        value={value}
        disabled={disable}
      />
      <span className="testField__error" style={style.testField__error}>
        {error}
      </span>
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  disable: PropTypes.bool,
};
TextField.defaultProps = {
  error: 'default error',
  value: 'default value',
  disable: false,
};

export default TextField;
