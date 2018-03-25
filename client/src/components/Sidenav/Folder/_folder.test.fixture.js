import Folder from './';
import './Folder.scss';

import File from 'mditor-types'
import logic from '../../../logic'

let folders = logic.refactorDataToFileType([{
  files: [
    {
      content: "Hellow New File 1 as dasds das ds",
      _id:"5ab6s9e5c3d56cb0b34899ff2", 
      title:"newFile1"
    },
    {
      content: "Hellow New File 2 as dasds das ds",
      _id:"sad0b34899543", 
      title:"newFile2"
    }
  ],
  _id:"5ab6sd9e513d56cb0b34899ff1",
  title: "HelloWorld",
}])

let folder = folders[0];

const folderWithoutFile = new File("folder", 2, "new Folder(2)")

const logicFolder = {
  create: () => console.log("Create Folder"),
  update: () => console.log("UpdateFolder"),
  delete: () => console.log("Delete Folder"),
  logicFile: {
    create: () => console.log("create File"),
    delete: () => console.log("delete File")
  }
}

export default [{
    component: Folder,
    name: "Folder with Files",
    url: '/',
    props: {
      folder: folder,
      logicFolder: logicFolder,
      handleToggleSidenav: () => console.log("toggle sidenav")
    }
  },
  {
    component: Folder,
    name: "Folder without Files",
    url: '/',
    props: {
      folder: folderWithoutFile,
      logicFolder: logicFolder,
      handleToggleSidenav: () => console.log("toggle sidenav")
    }
  }
];