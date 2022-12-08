import renderer from 'react-test-renderer';
import Result from '../components/Result';

test('Match Result Snapshot', () => {
  const tree = renderer.create(<Result value="5" />).toJSON();
  expect(tree).toMatchSnapshot();
});
