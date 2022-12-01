import React from 'react';
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
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: initialButtons,
      total: '0',
      next: null,
      operation: null,
      screen: '0',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    const newData = calculate(this.state, value);
    this.setState(newData);
    if ((newData.operation && newData.total) || newData.operation === undefined) {
      this.setState({ screen: newData.next });
    }
    if (newData.next === null) {
      this.setState({ screen: '0' });
    }
    if (newData.total !== null && newData.next === null) {
      this.setState({ screen: newData.total });
    }
    if (!newData.total && !newData.next && !newData.operation) {
      this.setState({ screen: '0', next: '0' });
    }
    if (value === '+/-') {
      if (newData.total !== null) {
        this.setState({ screen: newData.total });
      } else {
        this.setState({ screen: newData.next });
      }
    }
  }

  render() {
    const { buttons, screen } = this.state;
    return (
      <div className="calculator-container">
        <Result value={screen} />
        {buttons.map((button) => (
          <Button
            color={button.color}
            value={button.value}
            columns={button.columns}
            key={button.value}
            handleClick={this.handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Calculator;
