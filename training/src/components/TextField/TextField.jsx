import React from 'react';
import { style } from './style';

const TextField = (props) => {
  const { value, error, title, disable } = props;
  return (
    <div className="textField" style={style.textField}>
      <label className="textField__heading" style={style.textField__heading}>
        {title}
      </label>
      <br />
      <input
        className="testField__input"
        style={style.testField__input}
        type="text"
        placeholder={value}
        disabled={disable}
      />
      <label className="testField__error" style={style.testField__error}>
        {error}
      </label>
    </div>
  );
};

export default TextField;
