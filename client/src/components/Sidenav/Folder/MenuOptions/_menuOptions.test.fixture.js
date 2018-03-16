import MenuOptions from './';
import './MenuOptions.scss';

const logicOptions = {
  onDelete: () => console.log("onDeleteOption"),
  onUpdate: () => console.log("onUpdateOption")
}

const item = {
  id: 0,
  title: "Testing MenuOptions"
}

export default [{
  component: MenuOptions,
  name: "Standar MenuOptions Delete,Update",
  props: {
    item,
    logicOptions
  }
}];
