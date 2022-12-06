import React from 'react';
import Calculator from './Calculator';

const CalculatorContainer = () => {
  const title = "Let's do some math!";
  return (
    <div className="calculator-main-container">
      <h1 className="calculator-title">{title}</h1>
      <div className="calculator-content">
        <Calculator />
      </div>
    </div>
  );
};

export default CalculatorContainer;
