import VisualFile from './';

import logic from '../../../../logic'

let folders = logic.refactorDataToFileType([{
  files: [
    {
      content: "Hellow New File 1 as dasds das ds",
      _id:"5ab6s9e5c3d56cb0b34899ff2", 
      title:"newFile12"
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

let file = folders[0].files[0]
let folderId = folders[0].getId()

let url = `/${folderId}/${file.getId()}`

const logicFile = {
  create: () => console.log("Create file"),
  delete: () => console.log("Delete file")
}

export default [{
  component: VisualFile,
  name: "File View route",
  url: url +'/view',
  props: {
    file,
    folderId,
    logicFile,
    handleToggleSidenav: () => console.log("handle toggle sidenav")
  }
}, {
  component: VisualFile,
  name: "File Edit route",
  url: url + '/edit',
  props: {
    file,
    folderId,
    logicFile,
    handleToggleSidenav: () => console.log("handle toggle sidenav")
  }
}, {
  component: VisualFile,
  name: "No selected File",
  url: 'random/random/view',
  props: {
    file,
    folderId,
    logicFile,
    handleToggleSidenav: () => console.log("handle toggle sidenav")
  }
}];