import ModalEdit from './';

const item = { id: 0, title: "Testing ModalEdit" }
const small = { width: '30%', maxWidth: 'none' }
const medium = { width: '50%', maxWidth: 'none' }
const big = { width: '70%', maxWidth: 'none' }

export default [{
  component: ModalEdit,
  name: "Small ModalEdit",
  state: {
    open: true
  },
  props: {
    itemTitle: item.title,
    itemId: item.id,
    modalSize: small,
    handlerEdit: (itemId, inputValue) => console.log(`Ready to Edit ${itemId} ${inputValue}`),
    closeModal: () => console.log("closing modal")
  }
},{
  component: ModalEdit,
  name: "Medium ModalEdit",
  state: {
    open: true
  },
  props: {
    itemTitle: item.title,
    itemId: item.id,
    modalSize: medium,
    handlerEdit: (itemId, inputValue) => console.log(`Ready to Edit ${itemId} ${inputValue}`),
    closeModal: () => console.log("closing modal")
  }
},{
  component: ModalEdit,
  name: "Big ModalEdit",
  state: {
    open: true
  },
  props: {
    itemTitle: item.title,
    itemId: item.id,
    modalSize: big,
    handlerEdit: (itemId, inputValue) => console.log(`Ready to Edit ${itemId} ${inputValue}`),
    closeModal: () => console.log("closing modal")
  }
}];