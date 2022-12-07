import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CalculatorContainer from '../components/CalculatorContainer';

test('Render Calculator Container ', () => {
  render(<CalculatorContainer />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("Let's do some math!");
  expect(screen.getByText('1')).toHaveClass('button');
});

test('Match Calculator Snapshot', () => {
  const tree = renderer.create(<CalculatorContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
