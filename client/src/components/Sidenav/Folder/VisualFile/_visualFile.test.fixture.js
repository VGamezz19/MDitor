import VisualFile from './';
import API from '../../../../api/ApiClient'

const folder = API.getFolders()

const file = folder[0].files[0]
const folderId = folder[0].id
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
    logicFile
  }
}, {
  component: VisualFile,
  name: "File Edit route",
  url: '/0/2/edit',
  props: {
    file,
    folderId,
    logicFile
  }
}, {
  component: VisualFile,
  name: "No selected File",
  url: '/1/2/view',
  props: {
    file,
    folderId,
    logicFile
  }
}];