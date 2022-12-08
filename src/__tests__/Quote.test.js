import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import QuoteContainer from '../components/QuoteContainer';

test('Render Quote Container ', () => {
  const text = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston';
  render(<QuoteContainer />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent(text);
});

test('Match Quote Snapshot', () => {
  const tree = renderer.create(<QuoteContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
