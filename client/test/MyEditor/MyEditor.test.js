import React from 'react';
import ReactDOM from 'react-dom';
import MyEditor from '../../src/components/MyEditor';
import File from 'mditor-types'

const file = new File('file', 2, 'mew File')
const emitCurrentContent = (value)=> console.log(`emiting ${value}`)
it('Main aplication rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyEditor file={file} emitCurrentContent={emitCurrentContent}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});