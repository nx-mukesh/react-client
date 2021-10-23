import React from 'react';
import PropTypes from 'prop-types';
import { style } from './style';

const TextField = (props) => {
  const { onChange, handleOnBlur, error, label, value } = props;

  return (
    <div className="textField" style={style.textField}>
      <label htmlFor="inputName">{label}</label>
      <input
        className="testField__input"
        style={style.testField__input}
        type="text"
        value={value.name}
        name="name"
        onChange={onChange}
        onBlur={(event)=>handleOnBlur(event, 'name')}
      />
      <div><p style={{color:'red'}}>{error}</p></div>
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  handleOnBlur: PropTypes.func,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  value: '',
  label: '',
  error: '',
  handleOnBlur: ()=>{},
  onChange: () => {},
};

export default TextField;
