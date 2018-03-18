import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router';

import Sidenav from '../../src/components/Sidenav';
import API from '../../src/api/ApiClient';
import logicApp from '../../src/components/logicApp';

const dataFolders = API.getFolders()

/**
 * Mandatory data type FILE
 */
const folders = logicApp.refactorDataToFileType(dataFolders)

const logicFolder = {
    create: () => console.log("Create Folder"),
    update: () => console.log("UpdateFolder"),
    delete: () => console.log("Delete Folder"),
    logicFile: {
        create: () => console.log("create File"),
        delete: () => console.log("delete File")
    }
}
const buttonTriggerStyle = { className: 'grey lighten-2', icon: 'menu' }
const buttonDropStyle = { className: 'grey lighten-2', icon: 'close' }
const user = { name: "Victor", surname: "Gamez" }

it('Main aplication rendering', () => {
    const div = document.createElement('div');

    const wrapper = <MemoryRouter><Sidenav
        folders={folders}
        logicFolder={logicFolder}
        buttonTriggerStyle={buttonTriggerStyle}
        buttonDropStyle={buttonDropStyle}
        user={user} />
    </MemoryRouter>

    ReactDOM.render(wrapper, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Should create and Match same Snapshot', () => {

    const wrapper = <MemoryRouter><Sidenav
        folders={folders}
        logicFolder={logicFolder}
        buttonTriggerStyle={buttonTriggerStyle}
        buttonDropStyle={buttonDropStyle}
        user={user} />
    </MemoryRouter>

    const component = renderer.create(wrapper);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});