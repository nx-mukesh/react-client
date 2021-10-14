import React from 'react';
import PropTypes from 'prop-types';
import { style } from './style';

const TextField = (props) => {
  const { onChange, error, value } = props;
  return (
    <div className="textField" style={style.textField}>
      <label htmlFor="inputName">Name</label>
      <input
        className="testField__input"
        style={style.testField__input}
        type="text"
        value={value}
        name="inputName"
        id="inputName"
        onChange={onChange}
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
  handleOnChange: PropTypes.func,
};

TextField.defaultProps = {
  error: '',
  value: '',
  handleOnChange: () => {},
};

export default TextField;
