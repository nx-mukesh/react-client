import React, { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { validationSchema } from '../../lib//utils/validation';
import { RadioGroup, SelectField, TextField } from '../../components';
import { Button } from '../../components/Button';
import { style } from './style';

const InputDemo = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [cricket, setCricket] = useState('');
  const [football, setFootball] = useState('');
  const [error, setError] = useState('');
  const { getError, field } = useForm();

  // getError("firstName")
  // getError(errors => errors.firstName)

  // const { isTouched } = useForm();
  // isTouched(touched => touched.firstName);

  const handleNameChange = (event) => {
    const { value } = event.target;
    const validName = validationSchema.isValid(value)
    console.log(validName)
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
          error={error}
          options={[{ label: 'football' }, { value: 'football' }]}
        />
      );
    }
    if (sport === 'cricket') {
      return (
        <RadioGroup
          onChange={handleCricket}
          value={cricket}
          error={error}
          options={[{ label: 'cricket' }, { value: 'cricket' }]}
        />
      );
    }
    return null;
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    const formData = {
      name:event.target[0].value,
      sport:event.target[1].value,
      role:event.target[2].value,
    }
    console.log("formData", formData)
    validationSchema.isValid(formData).then(
      console.log("dataCorrenct")
    ).catch(
      console.log('error', error)
    )
  }

  return (
    <div className="inputDemo" style={style.inputDemo}>
      <form onSubmit={handleSubmit}>
        <div className="inputDemo__name">
          <TextField onChange={handleNameChange} value={name} error={error} />
        </div>
        <div className="inputDemo__select">
          <SelectField
            onChange={handleSportChange}
            value={sport}
            error={error}
            options={[{ label: 'Select the game you play' }, { value: 'Sport' }]}
            defaultText="Select"
          />
        </div>
        <div className="inputDemo__radio">{handleRadio(sport)}</div>
        <div className="inputDemo__button" style={style.inputDemo__button}>
          <Button disable={false} color={'green'} />
        </div>
      </form>
    </div>
  );
};

export default InputDemo;
