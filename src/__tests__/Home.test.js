import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import HomeContainer from '../components/HomeContainer';

test('Render Home Container ', () => {
  render(<HomeContainer />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Welcome to our page!');
});

test('Match Home Snapshot', () => {
  const tree = renderer.create(<HomeContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
