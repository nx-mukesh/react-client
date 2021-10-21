import React from 'react';
import PropTypes from 'prop-types';
import { style } from './style';

const TextField = (props) => {
  const { onChange, onBlurHandler, error, label, value } = props;

  return (
    <div className="textField" style={style.textField}>
      <label htmlFor="inputName">{label}</label>
      <input
        className="testField__input"
        style={style.testField__input}
        type="text"
        value={value}
        name="inputName"
        onChange={onChange}
        onBlur={onBlurHandler}
      />
      <span className="testField__error" style={style.testField__error}>
        {error}
      </span>
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  onBlurHandler: PropTypes.func,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  value: '',
  label: '',
  error: '',
  onBlurHandler: ()=>{},
  onChange: () => {},
};

export default TextField;
