import React from 'react';
import { PropTypes } from 'prop-types';
import { style } from './style';

const SelectField = (props) => {
  const { error, value, onChange, options, defaultText } = props;
  return (
    <div className="selectField" >
      <div className="selectField__label" style={style.selectField__label}>
        <label for="games">Select the game you play?</label>
      </div>
      <div className="dropdown">
        <select style={style.selectField__select_sport} name="games" id="games" onChange={onChange}>
          <option value="select" selected>Select</option>
          <option value="cricket">Cricket</option>
          <option value="football">Football</option>
        </select>
      </div>
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
