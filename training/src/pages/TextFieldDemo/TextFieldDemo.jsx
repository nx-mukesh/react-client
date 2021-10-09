import React from 'react';
import TextField from '../../components';

const TextFieldDemo = () => (
  <div className="textFieldDemo">
    <div className="textFieldDemo__disable">
      <span>
        <b> This is Disable Input</b>
      </span>
      <TextField value="Disable Input" disable error="" />
    </div>
    <div className="textFieldDemo__valid">
      <span>
        <b> A Valid Input</b>
      </span>
      <TextField value="Accessible" />
    </div>
    <div className="textFieldDemo__error">
      <span>
        {' '}
        <b>An Input With Error</b>
      </span>
      <TextField border={{ border: 'red' }} value="101" error="could not be greater then" />
    </div>
  </div>
);

export default TextFieldDemo;
