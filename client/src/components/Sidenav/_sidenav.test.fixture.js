import Sidenav from './';
import './Sidenav.scss';
import logic from '../../logic'

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