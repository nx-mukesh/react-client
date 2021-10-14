import React from 'react';
import { PropTypes } from 'prop-types';
import { style } from './style';

const RadioGroup = (props) => {
  const { error, onChange, options } = props;
  const displayPlayerRole = (options) => {
    {
      if (options[0].label === 'football') {
        return (
          <div className="playerRole">
            <div className="radioButton__football">
              <input
                style={style.input}
                type="radio"
                id="defender"
                name="player"
                value="defender"
                onChange={onChange}
              />
              <label htmlFor="defender">Defender</label>
            </div>
            <div>
              <input
                style={style.input}
                type="radio"
                id="striker"
                name="player"
                value="striker"
                onChange={onChange}
              />
              <label htmlFor="striker">Striker</label>
            </div>
          </div>
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
                value="wicket keeper"
                onChange={onChange}
              />
              <label htmlFor="wicket_keeper">Wicket Keeper</label>
            </div>
            <div>
              <input
                style={style.input}
                type="radio"
                id="batsman"
                name="player"
                value="batsman"
                onChange={onChange}
              />
              <label htmlFor="batsman">Batsman</label>
            </div>
            <div>
              <input
                style={style.input}
                type="radio"
                id="bowler"
                name="player"
                value="bowler"
                onChange={onChange}
              />
              <label htmlFor="bowler">Bowler</label>
            </div>
            <div>
              <input
                style={style.input}
                type="radio"
                id="all_rounder"
                name="player"
                value="all rounder"
                onChange={onChange}
              />
              <label htmlFor="all_rounder">All Rounder</label>
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
      <span className="testField__error" style={style.testField__error}>
        {error}
      </span>
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
