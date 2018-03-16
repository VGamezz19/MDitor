import AddItem  from './';
import './AddItem.scss'

export default [{
  component: AddItem,
  name: "AddItem Folder",
  props: {
    itemType: 'folder',
    inputType: 'text',
    onSubmit: value => console.log(`Submit ${value}`),
    onCancle: () => console.log("cancel")
  }
}, {
  component: AddItem,
  name: "AddItem File",
  props: {
    itemType: 'file',
    inputType: 'text',
    onSubmit: value => console.log(`Submit ${value}`),
    onCancle: () => console.log("cancel")
  }
}];