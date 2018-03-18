import React from 'react';
import ReactDOM from 'react-dom';
import CircleButton from '../../src/components/CircleButton';
import renderer from 'react-test-renderer';

it('CircleButton should rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CircleButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Shoult create new Snapshot with this props', () => {
  const component = renderer.create(
    <CircleButton className={'grey lighten-2'} iconClassName= 'black-font' icon= 'remove_red_eye' onClick={ () => console.log("Hello Cosmos!")} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});