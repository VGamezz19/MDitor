import VisualFile from './';
import API from '../../../../api/ApiClient'
import logicApp from '../../../logicApp'

const dataFolders = API.getFolders()
/**
 * Mandatory prototype File
 */
const folders = logicApp.refactorDataToFileType(dataFolders);

const file = folders[0].files[0]
const folderId = folders[0].getId()
const logicFile = {
  create: () => console.log("Create file"),
  delete: () => console.log("Delete file")
}

export default [{
  component: VisualFile,
  name: "File View route",
  url: '/0/2/view',
  props: {
    file,
    folderId,
    logicFile,
    handleToggleSidenav: () => console.log("handle toggle sidenav")
  }
}, {
  component: VisualFile,
  name: "File Edit route",
  url: '/0/2/edit',
  props: {
    file,
    folderId,
    logicFile,
    handleToggleSidenav: () => console.log("handle toggle sidenav")
  }
}, {
  component: VisualFile,
  name: "No selected File",
  url: '/1/2/view',
  props: {
    file,
    folderId,
    logicFile,
    handleToggleSidenav: () => console.log("handle toggle sidenav")
  }
}];