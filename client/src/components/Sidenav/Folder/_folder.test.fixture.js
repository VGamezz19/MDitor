import Folder from './';
import './Folder.scss';
import API from '../../../api/ApiClient'
import File from 'mditor-types'
import logicApp from '../../logicApp'

const dataFolders = API.getFolders()
const folders = logicApp.refactorDataToFileType(dataFolders);

const folder = folders[0]
/**
 * Mandatory prototype File
 */
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