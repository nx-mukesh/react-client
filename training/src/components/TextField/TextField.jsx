import React from 'react';
import './style.css';

const TextField = () => {
  return (
    <div className="test-field__container">
      <div className="test-field__disable-input">
        <h4>This is a Disable Input</h4>
        <input type="text" placeholder="Disabled Input" disabled/>
      </div>
      <div className="test-field__accessible-input">
        <h4>A Valid Input</h4>
        <input type="text" placeholder="Accessible" />
      </div>
      <div className="test-field__error-input">
        <h4>An Input with errors</h4>
        <input type="text" placeholder="101" /><br/>
        <small>Could not be greater than</small>
      </div>
    </div>
  );
};

export default TextField;
