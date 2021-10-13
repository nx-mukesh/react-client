import React from 'react';
import { PropTypes } from 'prop-types';
import { style } from './style';

const RadioGroup = (props) => {
  const { error, value, onChange, options } = props;
  console.log(options[0].label);
  const displayPlayerRole = (options) => {
    {
      if (options[0].label === 'football') {
        return (
          <fieldset
            className="schedule-weekday"
            value={value}
            // onChange={(event) => handleWeekdayChange(event)}
            onChange={onChange}
          >
            <div className="radioButton__football">
              <input
                style={style.input}
                type="radio"
                id="defender"
                name="player"
                value="defender"
                checked={value}
                onChange={onChange}
              />
              <label for="defender">Defender</label>
            </div>
            <div>
              <input
                style={style.input}
                type="radio"
                id="striker"
                name="player"
                checked={value}
                value="striker"
                onChange={onChange}
              />
              <label for="striker">Striker</label>
            </div>
          </fieldset>
        );
      }
      if (options[0].label === 'cricket') {
        return (
          <div className="radioButton__cricket">
            <div>
              <input
                style={style.input}
                type="radio"
                id="wicket_keeper"
                name="player"
                value={value}
                onChange={onChange}
              />
              <label for="wicket_keeper">Wicket Keeper</label>
            </div>
            <div>
              <input
                style={style.input}
                type="radio"
                id="batsman"
                name="player"
                value={value}
                onChange={onChange}
              />
              <label for="batsman">Batsman</label>
            </div>
            <div>
              <input
                style={style.input}
                type="radio"
                id="bowler"
                name="player"
                value={value}
                onChange={onChange}
              />
              <label for="bowler">Bowler</label>
            </div>
            <div>
              <input
                style={style.input}
                type="radio"
                id="all_rounder"
                name="player"
                value={value}
                onChange={onChange}
              />
              <label for="all_rounder">All Rounder</label>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <div className="radioGroup">
      <h4 style={style.input}>What you do?</h4>
      {displayPlayerRole(options)}
    </div>
  );
};

RadioGroup.propTypes = {
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
};
RadioGroup.defaultProps = {
  error: '',
  value: '',
  onChange: '',
  options: [],
};

export default RadioGroup;
