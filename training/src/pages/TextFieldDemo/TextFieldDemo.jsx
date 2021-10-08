import React from 'react';
import TextField from '../../components/TextField';

const TextFieldDemo = () => {
  return (
    <div className="textFieldDemo">
      <div className="textFieldDemo__disable">
        <label><b> This is Disable Input</b></label>
        <TextField value="Disable Input" disable={true} error="" />
      </div>
        <div className="textFieldDemo__valid">
          <label><b> A Valid Input</b></label>
          <TextField value="Accessible" />
      </div>
      <div className="textFieldDemo__error">
        <label> <b>An Input With Error</b></label>
        <TextField border={{border:"red"}}value="101" error="could not be greater then" />
      </div>
    </div>
  );
};

export default TextFieldDemo;
