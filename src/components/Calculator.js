import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import Result from './Result';

const initialButtons = [
  { value: 'AC' },
  { value: '+/-' },
  { value: '%' },
  { value: '÷', color: 'orange' },
  { value: '7' },
  { value: '8' },
  { value: '9' },
  { value: 'x', color: 'orange' },
  { value: '4' },
  { value: '5' },
  { value: '6' },
  { value: '-', color: 'orange' },
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '+', color: 'orange' },
  { value: '0', columns: 2 },
  { value: '.' },
  { value: '=', color: 'orange' },
];

const Calculator = () => {
  const [data, setData] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const [screen, setScreen] = useState('0');

  const handleClick = (value) => {
    const newData = calculate(data, value);
    setData(newData);
    if ((newData.operation && newData.total) || newData.operation === undefined) {
      setScreen(newData.next);
    }
    if (newData.next === null) {
      setScreen('0');
    }
    if (newData.total !== null && newData.next === null) {
      setScreen(newData.total);
    }
    if (!newData.total && !newData.next && !newData.operation) {
      setScreen('0');
      setData({ ...data, next: '0' });
    }
    if (value === '+/-') {
      if (newData.total !== null) {
        setScreen(newData.total);
      } else {
        setScreen(newData.next);
      }
    }
  };
  return (
    <div className="calculator-container">
      <Result value={screen} />
      {initialButtons.map((button) => (
        <Button
          color={button.color}
          value={button.value}
          columns={button.columns}
          key={button.value}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Calculator;
