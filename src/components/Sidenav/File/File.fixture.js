import File  from './';
import './File.scss';
import API from '../../../api/ApiClient'

const folder = API.getFolders()

const file = folder[0].files[0]
const folderId = folder[0].id
const logicFile = {
  create : () => console.log("Create file"),
  delete : () => console.log("Delete file")
}

export default [{
  component: File,
  name: "File",
  url: '/0/2/view',
  props: {
    file,
    folderId,
    logicFile
  }
},
//  {
//   component: AddItem,
//   name: "AddItem File",
//   props: {
//     itemType: 'file',
//     inputType: 'text',
//     onSubmit: value => console.log(`Submit ${value}`),
//     onCancle: () => console.log("cancel")
//   }
// }
];