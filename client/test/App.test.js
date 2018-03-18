import React from 'react';
import ReactDOM from 'react-dom';
import { App, RoutingApp } from '../src/components/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoutingApp app={App} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
