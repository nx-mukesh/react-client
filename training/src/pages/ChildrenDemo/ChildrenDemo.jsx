import React from 'react';
import { Math } from '../../components/Math';

const ChildrenDemo = () => {
  return (
    <div className="childrenDemo">
      <Math first={7} second={4} operator={'+'}>
        {(first, second, operator, result) => {
          return `Sum of ${first} and ${second} is ${result}`;
        }}
      </Math>
      <Math first={7} second={3} operator={'-'}>
        {(first, second, operator, result) => {
          return `Minus of ${first} and ${second} is ${result}`;
        }}
      </Math>
      <Math first={7} second={3} operator={'*'} />
      <Math first={7} second={0} operator={'/'} />
      <Math first={7} second={8} operator={'^'} />
    </div>
  );
};

export default ChildrenDemo;
