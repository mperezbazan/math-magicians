import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test('Render App Container ', async () => {
  render(<Router><App /></Router>);
  await userEvent.click(screen.getByText('Home'));
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome to our page!');
});

test('Match App Snapshot', () => {
  const tree = renderer.create(<Router><App /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
