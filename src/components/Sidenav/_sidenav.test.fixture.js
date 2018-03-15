import Sidenav from './';
import './Sidenav.scss';
import API from '../../api/ApiClient'

const folders = API.getFolders()

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
    buttonTriggerStyle: { className: 'grey lighten-2', iconClassName: null, icon: 'menu' },
    buttonDropStyle: { className: null, iconClassName: 'black-font', icon: 'close' },
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
    buttonTriggerStyle: { className: 'grey lighten-2', iconClassName: null, icon: 'menu' },
    buttonDropStyle: { className: null, iconClassName: 'black-font', icon: 'close' },
    user: { name: user.name, surname: user.surname },
    folders: [],
    logicFolder: logicFolder
  }
}];