import React, { useState } from 'react';
import * as yup from 'yup';
import { hasError, validationSchema } from '../../lib/utils/helper';
import { RadioGroup, SelectField, TextField } from '../../components';
import { Button } from '../../components/Button';
import { style } from './style';

const InputDemo = () => {
  const [name, setName] = useState('');
  const [sport, setSport] = useState('');
  const [cricket, setCricket] = useState('');
  const [football, setFootball] = useState('');
  const [error, setError] = useState('');
  const [formValue, setFormValue] = useState({});
  const getError = () => {
    return 'error';
  };
  const handleNameChange = async (event) => {
    const { value } = event.target;
    console.log('value', value);
    // const error = getError(validationSchema, value);
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
  const touched = () => {
    return true;
  };

  console.log({
    name: name,
    sport: sport,
    cricket: cricket,
    football: football,
  });

  // ++++++++++++++++++++++++++++++++++++++Errror++++++++++++++++++++++
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
        setFormValue({
          ...formValue,
          error: {},
        });
      })
      .catch((errors) => {
        const schemaErrors = {};
        if (errors) {
          errors.inner.forEach((err) => {
            schemaErrors[err.path] = err.message;
          });
          setFormValue({
            ...value,
            errors: schemaErrors,
          });
        }
      });
  };

  let schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    email: yup.string().email(),
    website: yup.string().url(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  // hasError
  const hasError =(value, type)=>{
    if(value === ''){
      setError(`${type} field required`)
      return console.log(error)
    }
  }
console.log(error)
  // ============================================== onBlurChange
  const onBlurHandler = (event, type) => {
    const { value } = event.target;
    hasError({value, type})
    // validationSchema.isValid({type:value}).then(valid=>{
    //   console.log('validInput', valid)
    // }).catch((error)=>{
    //   console.log('error', error)
    // })
  };
  // ++++++============================================OnChange handler
  const handleOnchange = (event, field) => {
    const { value } = event.target;
    touched[field] = true;
    const formData = {
      name: event.target[0].value,
      sport: event.target[1].value,
      role: event.target[2].value,
    };
    const newValue = {
      ...formValue,
      sport: value,
      cricket: '',
      football: '',
    };
  };

  const handleRadio = () => {
    if (sport === 'football') {
      return (
        <RadioGroup
          error={getError(formValue, 'football')}
          onChange={handleFootball}
          onBlurHandler={(event) => {
            onBlurHandler(event, 'football');
          }}
          value={football}
          options={[{ label: 'football' }, { value: 'football' }]}
        />
      );
    }
    if (sport === 'cricket') {
      return (
        <RadioGroup
          onChange={handleCricket}
          onBlurHandler={(event) => {
            onBlurHandler(event, 'cricket');
          }}
          error={getError(formValue, 'cricket')}
          value={cricket}
          options={[{ label: 'cricket' }, { value: 'cricket' }]}
        />
      );
    }
    return null;
  };

  return (
    <div className="inputDemo" style={style.inputDemo}>
      <form>
        <div className="inputDemo__name">
          <TextField
            onChange={handleNameChange}
            onBlurHandler={(event) => {
              onBlurHandler(event, 'name');
            }}
            error={(getError(formValue), 'sport')}
            label="Name"
            value={name}
          />
        </div>
        <div className="inputDemo__select">
          <SelectField
            onChange={handleSportChange}
            value={sport}
            onBlurHandler={(event) => {
              onBlurHandler(event, 'sport');
            }}
            error={(getError(formValue), 'sport')}
            options={[{ label: 'Select the game you play' }, { value: 'Sport' }]}
            defaultText="Select"
            label="sport"
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
