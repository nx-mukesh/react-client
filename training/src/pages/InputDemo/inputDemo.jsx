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
  console.log({
    name: name,
    sport: sport,
    cricket: cricket,
    football: football,
  });
  const handleRadio = () => {
    if (sport === 'football') {
      return (
        <RadioGroup
          onChange={handleFootball}
          value={football}
          error=""
          options={[{ label: 'football' }, { value: 'football' }]}
        />
      );
    }
    if (sport === 'cricket') {
      return (
        <RadioGroup
          onChange={handleCricket}
          value={cricket}
          error=""
          options={[{ label: 'cricket' }, { value: 'cricket' }]}
        />
      );
    }
    return null;
  };
  return (
    <div className="inputDemo">
      <TextField onChange={handleNameChange} value={name} error="" />
      <SelectField
        onChange={handleSportChange}
        value={sport}
        error=""
        options={[{ label: 'Select the game you play' }, { value: 'Sport' }]}
        defaultText="Select"
      />
      {handleRadio(sport)}
    </div>
  );
};

export default InputDemo;
