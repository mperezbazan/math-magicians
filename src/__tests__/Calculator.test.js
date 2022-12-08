import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

test('Match Calculator Snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
