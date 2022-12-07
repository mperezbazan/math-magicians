import calculate from '../logic/calculate';
import '@testing-library/jest-dom';

describe('Testing suite for operate', () => {
  it('renders result when clicking "0"', () => {
    const calculation = { total: '0', next: null, operation: null };
    const buttonName = '0';
    const result = { next: '0', total: null };
    expect(calculate(calculation, buttonName)).toStrictEqual(result);
  });
  it('renders result when clicking "AC"', () => {
    const calculation = { total: '0', next: null, operation: null };
    const buttonName = 'AC';
    const result = { total: null, next: null, operation: null };
    expect(calculate(calculation, buttonName)).toStrictEqual(result);
  });
  it('renders result when clicking "="', () => {
    const calculation = { total: '0', next: null, operation: null };
    const buttonName = '=';
    const result = {};
    expect(calculate(calculation, buttonName)).toStrictEqual(result);
  });
  it('renders result when clicking "7"', () => {
    const calculation = { total: '0', next: null, operation: null };
    const buttonName = '7';
    const result = { total: null, next: '7' };
    expect(calculate(calculation, buttonName)).toStrictEqual(result);
  });
  it('renders result when clicking "="', () => {
    const calculation = { total: '0', next: null, operation: null };
    const buttonName = '7';
    const buttonName1 = '8';
    const result1 = calculate(calculation, buttonName);
    const result = { total: null, next: '78' };
    expect(calculate(result1, buttonName1)).toStrictEqual(result);
  });
});
