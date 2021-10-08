import React from 'react';
import { style } from './style';
import PropTypes from 'prop-types';

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
      <label className="testField__error" style={style.testField__error}>
        {error}
      </label>
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  disable: PropTypes.bool,
};

export default TextField;
