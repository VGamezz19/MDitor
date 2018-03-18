import React from 'react';
import ReactDOM from 'react-dom';
import MarkDown from '../../src/components/MarkDown';
import renderer from 'react-test-renderer';
import File from 'mditor-types'

const file = new File('file', 2, 'mew File')
const emitCurrentContent = (value)=> console.log(`emiting ${value}`)
it('Main aplication rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MarkDown file={file} emitCurrentContent={emitCurrentContent}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Should create and Match same Snapshot', () => {
  const component = renderer.create(
    <MarkDown file={file} emitCurrentContent={emitCurrentContent}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});