import React from 'react';
import TextField from '../../components/TextField';

const TextFieldDemo = () => {
  return (
    <div>
      <TextField value="Disable Input" disable={true} title="This is a Disable Input"/>
      <TextField value="Accessible" disable={false} title="A Valid Input"/>
      <TextField value="101" disable={false} title="An Input With Error" error="could not be greater than"/>
    </div>
  )
}

export default TextFieldDemo

