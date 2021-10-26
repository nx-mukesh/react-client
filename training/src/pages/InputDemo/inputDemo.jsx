import React, { useState, useEffect } from 'react';
import { validationSchema } from '../../lib/utils/helper';
import { RadioGroup, SelectField, TextField } from '../../components';
import { Button } from '../../components/Button';
import { style } from './style';

const InputDemo = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [cricket, setCricket] = useState('');
  const [football, setFootball] = useState('');
  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});
  const [disable, setDisable] = useState(true);

  const handleNameChange = async (event) => {
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

  const data = {
    name: name,
    sport: sport,
    cricket: cricket,
    football: football,
  };
  console.log(data)
  useEffect(() => {
    if(Object.keys(error).length === 0 ){
      setDisable(false)
    }

  }, [error])

  const handleErrors = (value) => {
    const { name, sport, cricket, football } = value;
    validationSchema
      .validate(
        {
          name,
          sport,
          cricket,
          football,
        },
        { abortEarly: false },
      )
      .then(() => {
        setError({});
      })
      .catch((errors) => {
        const schemaErrors = {};
        if (errors) {
          errors.inner.forEach((err) => {
            schemaErrors[err.path] = err.message;
          });
          setError(schemaErrors);
        }
      });
  };

  const handleOnBlur = (event, type) => {
    event.preventDefault()
    setTouched({...touched, [type]:"true"})
    const newValue = {
      name,
      sport,
      cricket,
      football,
    };
    handleErrors(newValue);
    setError({})
  };

  const handleSubmit=(event)=>{
    event.preventDefault()
  }

  const handleRadio = () => {
    if (sport === 'football') {
      return (
        <RadioGroup
          error={error.whatYouDo}
          onChange={handleFootball}
          handleOnBlur={handleOnBlur}
          value={football}
          options={[{ label: 'football' }, { value: 'football' }]}
        />
      );
    }
    if (sport === 'cricket') {
      return (
        <RadioGroup
          onChange={handleCricket}
          handleOnBlur={handleOnBlur}
          error={error.whatYouDo}
          value={cricket}
          options={[{ label: 'cricket' }, { value: 'cricket' }]}
        />
      );
    }
    return null;
  };

  return (
    <div className="inputDemo" style={style.inputDemo}>
      <form onSubmit={handleSubmit}>
        <div className="inputDemo__name">
          <TextField
            onChange={handleNameChange}
            handleOnBlur={handleOnBlur}
            error={error.name}
            label="Name"
            value={name}
          />
        </div>
        <div className="inputDemo__select">
          <SelectField
            onChange={handleSportChange}
            value={sport}
            handleOnBlur={handleOnBlur}
            error={error.sport}
            options={[{ label: 'Select the game you play' }, { value: 'Sport' }]}
            defaultText="Select"
            label="sport"
          />
        </div>
        <div className="inputDemo__radio">{handleRadio(sport)}</div>
        <div className="inputDemo__button" style={style.inputDemo__button}>
          <Button color='green' disabled={disable} style={{padding:'5px', margin:'2px'}} value={data} onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  );
};

export default InputDemo;
