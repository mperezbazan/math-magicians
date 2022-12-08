import operate from '../logic/operate';

describe('Testing suite for operate', () => {
  it('Sums', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });

  it('Multiplies', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });

  it('Substracts', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });

  it('Divides', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  it('Module', () => {
    expect(operate(4, 2, '%')).toBe('0');
  });
});
