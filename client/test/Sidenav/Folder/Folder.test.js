import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Folder from '../../../src/components/Sidenav/Folder';
import File from 'mditor-types';

const logicFolder = {
  create: () => console.log("Create Folder"),
  update: () => console.log("UpdateFolder"),
  delete: () => console.log("Delete Folder"),
  logicFile: {
    create: () => console.log("create File"),
    delete: () => console.log("delete File")
  }
}
/**
 * Mandatory data type FILE
 */
const folder = new File("folder", 3, "title Folder")


it('Main aplication rendering', () => {

    const div = document.createElement('div');

    const wrapper = <Folder
        folder={folder}
        logicFolder={logicFolder}
        handleToggleSidenav= {() => console.log("toggle sidenav")}/>

    ReactDOM.render(wrapper, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('Should create and Match same Snapshot', () => {

    const wrapper = <Folder
        folder={folder}
        logicFolder={logicFolder}
        handleToggleSidenav= {() => console.log("toggle sidenav")}/>

    const component = renderer.create(wrapper);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});