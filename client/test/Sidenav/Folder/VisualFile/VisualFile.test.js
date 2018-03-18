import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import VisualFile from '../../../../src/components/Sidenav/Folder/VisualFile';
import File from 'mditor-types';

const file = new File("file", 3, "title file", "some content")
const folderId = 3
const logicFile = {
    create: () => console.log("Create file"),
    delete: () => console.log("Delete file")
}


it('Main aplication rendering', () => {

    const div = document.createElement('div');

    const wrapper = <MemoryRouter>
        <VisualFile
            file={file}
            folderId={folderId}
            logicFile={logicFile}
            handleToggleSidenav={() => console.log("handle toggle sidenav")} />
    </ MemoryRouter>

    ReactDOM.render(wrapper, div);

    ReactDOM.unmountComponentAtNode(div);
});

it('Should create and Match same Snapshot', () => {

    const wrapper = <MemoryRouter>
        <VisualFile
            file={file}
            folderId={folderId}
            logicFile={logicFile}
            handleToggleSidenav={() => console.log("handle toggle sidenav")} />
    </ MemoryRouter>

    const component = renderer.create(wrapper);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});