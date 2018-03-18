import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import MenuOption from '../../../../src/components/Sidenav/Folder/MenuOptions';
import File from 'mditor-types';

/**
 * Mandatory data type FILE
 */
const folder = new File("folder", 3, "title Folder")
const logicOptions = {
    onDelete: () => console.log("delete"),
    onUpdate: () => console.log("update")
}

it('Main aplication rendering', () => {

    const div = document.createElement('div');

    const wrapper = <MenuOption
        item={folder}
        logicOptions={logicOptions} />

    ReactDOM.render(wrapper, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('Should create and Match same Snapshot', () => {

    const wrapper = <MenuOption
        item={folder}
        logicOptions={logicOptions} />

    const component = renderer.create(wrapper);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});