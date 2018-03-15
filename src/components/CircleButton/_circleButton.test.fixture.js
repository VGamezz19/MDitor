import CircleButton from './';
// const { className, iconClassName, icon, onClick  } = props

export default {
  component: CircleButton,
  name: "testCosmos with Materialize Styles",
  props: {
    className: 'Lorem ipsum',
    iconClassName: 'some class',
    icon: 'delete',
    onClick: () => console.log("Hello Cosmos!")
  }
};