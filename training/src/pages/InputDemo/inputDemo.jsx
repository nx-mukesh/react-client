import React, { useState } from 'react';
import { RadioGroup, SelectField, TextField } from '../../components';

const InputDemo = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [cricket, setCricket] = useState('');
  const [football, setFootball] = useState('');

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
  };
  const handleSportChange = (event) => {
    const { value } = event.target;
    setSport(value);
  };
  const handleCricket = (event) => {
    const { value } = event.target;
    setCricket(value);
  };
  const handleFootball = (event) => {
    const { value } = event.target;
    setFootball(value);
  };
  console.log({ name, sport, cricket, football });
  console.log(football)
  const handleRadio = () => {
    if (sport === 'football') {
      return (
        <RadioGroup
          onClick={handleFootball}
          value={football}
          error="no error"
          options={[{ label: 'football' }, { value: 'football' }]}
        />
      );
    }
    if (sport === 'cricket') {
      return (
        <RadioGroup
          onClick={handleCricket}
          value={cricket}
          error="no error"
          options={[{ label: 'cricket' }, { value: 'cricket' }]}
        />
      );
    }
    return;
  };
  return (
    <div className="inputDemo">
      <TextField onChange={handleNameChange} value={name} error="no error" />
      <SelectField
        onChange={handleSportChange}
        value={sport}
        error="no error"
        // options={[{ label }, { value }]}
        defaultText=""
      />
      {handleRadio(sport)}
    </div>
  );
};

export default InputDemo;
