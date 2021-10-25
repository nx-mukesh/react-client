import React from 'react';
import { Math } from '../../components/Math';
import {OPERATOR} from '../../configs/constants';

const ChildrenDemo = () => {
  return (
    <div className="childrenDemo">
      <Math first={7} second={4} operator={OPERATOR.plus}>
        {(first, second, operator, result) => {
          return `Sum of ${first} and ${second} is ${result}`;
        }}
      </Math>
      <Math first={7} second={3} operator={OPERATOR.minus}>
        {(first, second, operator, result) => {
          return `Minus of ${first} and ${second} is ${result}`;
        }}
      </Math>
      <Math first={7} second={3} operator={OPERATOR.multiply} />
      <Math first={7} second={0} operator={OPERATOR.divide} />
      <Math first={7} second={8} operator={OPERATOR.power} />
    </div>
  );
};

export default ChildrenDemo;
