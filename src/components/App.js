import React, { Component } from 'react';
import './App.scss';

import CircleButton from './CircleButton'
import Sidenav from './Sidenav'
import MyEditor from './MyEditor/'
import MarkDown from './MarkDown'

let id = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
      mdSrc: '',
      folders: [{
        id: 0,
        title: 'new Folder1',
        files: [{ title: 'terst file1' }, { title: 'terst file2' }]
      }, {
        id: 1,
        title: 'new Folder2',
        files: [{ title: 'terst file1' }, { title: 'terst file2' }]
      }],
      user: {
        name: 'Victor',
        surname: 'Gamez'
      }

    }
  }
  onChangeEditor = (mdSrc) => {
    this.setState({ mdSrc })
  }

  newFolder = (title) => {
    this.setState(prevState => ({
      folders: [...prevState.folders, { title, id: id++, files: [] }]
    }))
  }

  updateFolder = (id, newTitle) => {
    console.log(id, newTitle)
    this.setState(prevState =>({
      folders: prevState.folders.map(folder => {
        if (folder.id === id) folder.title = newTitle
        return folder
      })
    }))
  }

  deleteFolder = (id) => {
    console.log(id)
    this.setState(prevState =>({
      folders: prevState.folders.filter(folder => folder.id !== id)
    }))
  }

  handlerMyEditor = (mdSrc) => this.setState({ mdSrc })

  render() {
    return (
      <section className="App">
        <article>
          <Sidenav
            buttonTriggerStyle={{ buttonClassName: 'grey lighten-2', iconClassName: null, icon: 'menu' }}
            buttonDropStyle={{ buttonClassName: null, iconClassName: 'black-font', icon: 'close' }}
            user={{ name: this.state.user.name, surname: this.state.user.surname }}
            folders={this.state.folders}
            logicFolder={{
              newFolder: this.newFolder,
              updateFolder: this.updateFolder,
              deleteFolder: this.deleteFolder
            }}/>

          <CircleButton ButtonClassName='grey lighten-2' IconClassName='black-font' icon='edit' />
        </article>

        <div className='MarkDownEdited'>
          <MarkDown src={this.state.mdSrc} />
          <MyEditor handlerMyEditor={this.handlerMyEditor} />
        </div>
      </section>
    );
  }
}

export default App;
