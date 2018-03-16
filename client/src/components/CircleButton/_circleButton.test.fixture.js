import CircleButton from './';

export default [{
    component: CircleButton,
    name: "Edit mode",
    props: {
      className: 'grey lighten-2',
      iconClassName: 'black-font',
      icon: 'edit',
      onClick: () => console.log("Hello Cosmos!")
    }
  },
  {
    component: CircleButton,
    name: "View mode",
    props: {
      className: 'grey lighten-2',
      iconClassName: 'black-font',
      icon: 'remove_red_eye',
      onClick: () => console.log("Hello Cosmos!")
    }
  },
  {
    component: CircleButton,
    name: "Add new File",
    props: {
      className: 'add-files grey lighten-3',
      iconClassName: 'black-font',
      icon: 'add',
      onClick: () => console.log("Hello Cosmos!")
    }
  },
  {
    component: CircleButton,
    name: "Add new Folder",
    props: {
      className: 'add-folder grey',
      iconClassName: 'black-font',
      icon: 'add',
      onClick: () => console.log("Hello Cosmos!")
    }
  },
];

