import Folder from './';
import './Folder.scss';
import API from '../../../api/ApiClient'

const folders = API.getFolders()
const folder = folders[0]
const folderWithoutFile = {
  id: 1,
  title: 'new Folder (2)',
  files: []
}
const logicFolder = {
  create: () => console.log("Create Folder"),
  update: () => console.log("UpdateFolder"),
  delete: () => console.log("Delete Folder"),
  logicFile: {
    create: () => console.log("create File"),
    delete: () => console.log("delete File")
  }
}

export default [
  {
    component: Folder,
    name: "Folder with Files",
    url: '/',
    props: {
      folder: folder,
      logicFolder: logicFolder
    }
  },
  {
    component: Folder,
    name: "Folder without Files",
    url: '/',
    props: {
      folder: folderWithoutFile,
      logicFolder: logicFolder
    }
  }
  // {
  //   component: Sidenav,
  //   name: "Sidenav Empty Content",
  //   url: '/0/2/edit',
  //   props: {
  //     buttonTriggerStyle: { className: 'grey lighten-2', iconClassName: null, icon: 'menu' },
  //     buttonDropStyle: { className: null, iconClassName: 'black-font', icon: 'close' },
  //     user: { name: user.name, surname: user.surname },
  //     folders: [],
  //     logicFolder: logicFolder
  //   }
  // }
];