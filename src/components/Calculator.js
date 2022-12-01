import React from 'react';
import Button from './Button';
import Result from './Result';

const initialButtons = [
  { value: 'AC' },
  { value: '±' },
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
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttons: initialButtons };
  }

  render() {
    const { buttons } = this.state;
    return (
      <div className="calculator-container">
        <Result value={0} />
        {buttons.map((button) => (
          <Button
            color={button.color}
            value={button.value}
            columns={button.columns}
            key={button.value}
          />
        ))}
      </div>
    );
  }
}

export default Calculator;
