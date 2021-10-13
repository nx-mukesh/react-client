import React from 'react';
import PropTypes from 'prop-types';
import { style } from './style';

const TextField = (props) => {
  const { handleOnChange, error, value } = props;
  return (
    <div className="textField" style={style.textField}>
      <input
        className="testField__input"
        style={style.testField__input}
        type="text"
        value={value}
        name="input"
        onChange={handleOnChange}
      />
      <span className="testField__error" style={style.testField__error}>
        {error}
      </span>
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleOnChange: PropTypes.fun.isRequired,
};

TextField.defaultProps = {
  error: '',
  value: '',
  handleOnChange: '',
};

export default TextField;
