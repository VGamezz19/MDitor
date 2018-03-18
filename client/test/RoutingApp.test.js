import React from 'react';
import ReactDOM from 'react-dom';
import { App, RoutingApp } from '../src/components/';
import renderer from 'react-test-renderer';

it('Main aplication rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoutingApp app={App} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Should create and Match same Snapshot', () => {
  const component = renderer.create(
    <RoutingApp app={App} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});