import React from 'react';
import { PropTypes } from 'prop-types';
import { style } from './style';

const SelectField = (props) => {
  const { error, onChange, defaultText, handleOnBlur } = props;
  return (
    <div className="selectField">
      <div className="selectField__label" style={style.selectField__label}>
        <label htmlFor="games">Select the game you play?</label>
      </div>
      <div className="dropdown">
        <select
          style={style.selectField__select_sport}
          name="sport"
          onBlur={(event) => handleOnBlur(event, 'sport')}
          onChange={onChange}
        >
          <option value="" readOnly>
            {defaultText}
          </option>
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
        </select>
      </div>
      <span className="testField__error" style={{color:'red'}}>
        {error}
      </span>
    </div>
  );
};

SelectField.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  defaultText: PropTypes.string,
};
SelectField.defaultProps = {
  error: '',
  value: '',
  onChange: '',
  options: [],
  defaultText: '',
};

export default SelectField;
