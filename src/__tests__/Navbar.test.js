import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('Render Navbar Container ', () => {
  render(<Router><Navbar /></Router>);
  const heading = screen.getByRole('navigation');
  expect(heading).toBeInTheDocument();
});

test('Match Navbar Snapshot', () => {
  const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
