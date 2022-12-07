import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Button from '../components/Button';

const handleClick = () => 'OK';

test('Render Button Container ', () => {
  render(<Button value="7" handleClick={handleClick} />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent('7');
  expect(button).toHaveClass('button');
});

test('Match Button Snapshot', () => {
  const tree = renderer.create(<Button value="7" handleClick={handleClick} />).toJSON();
  expect(tree).toMatchSnapshot();
});
