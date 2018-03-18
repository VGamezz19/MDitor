import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import AddItem from '../../../src/components/Sidenav/AddItem';

it('Main aplication rendering', () => {

    const div = document.createElement('div');

    const wrapper = <AddItem
        itemType='file'
        inputType='text'
        onSubmit={() => console.log("submit")}
        onCancel={() => console.log("cancel")} />

    ReactDOM.render(wrapper, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('Should create and Match same Snapshot', () => {

    const wrapper = <AddItem
        itemType='file'
        inputType='text'
        onSubmit={() => console.log("submit")}
        onCancel={() => console.log("cancel")} />

    const component = renderer.create(wrapper);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});