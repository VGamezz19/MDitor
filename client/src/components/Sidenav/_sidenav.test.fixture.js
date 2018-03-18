import Sidenav from './';
import './Sidenav.scss';
import API from '../../api/ApiClient'
import logicApp from '../logicApp'

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
const user = { name: 'Test', surname: 'Cosmos' }


export default [{
  component: Sidenav,
  name: "Sidenav With Content",
  url: '/0/2/edit',
  props: {
    buttonTriggerStyle: { className: 'grey lighten-2', icon: 'menu' },
    buttonDropStyle: { className: 'grey lighten-2', icon: 'close' },
    user: { name: user.name, surname: user.surname },
    folders: folders,
    logicFolder: logicFolder
  }
},
{
  component: Sidenav,
  name: "Sidenav Empty Content",
  url: '/0/2/edit',
  props: {
    buttonTriggerStyle: { className: 'grey lighten-2', icon: 'menu' },
    buttonDropStyle: { className: 'grey lighten-2', icon: 'close' },
    user: { name: user.name, surname: user.surname },
    folders: [],
    logicFolder: logicFolder
  }
}];