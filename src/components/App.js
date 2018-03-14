import React, { Component } from 'react';
import './App.scss';

import CircleButton from './CircleButton'
import Sidenav from './Sidenav'
import MyEditor from './MyEditor/'
import MarkDown from './MarkDown'

let id = 6;

class App extends Component {
  constructor() {
    super();
    this.state = {
      mdSrc: '',
      folders: [{
        id: 0,
        title: 'new Folder1',
        files: [{ id: 2, title: 'terst file1', content:'' }, { id: 3, title: 'terst file2', content:'' }]
      }, {
        id: 1,
        title: 'new Folder2',
        files: [{ id: 4, title: 'terst file1', content:'' }, { id: 5, title: 'terst file2', content:'' }]
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
    this.setState(prevState => ({
      folders: prevState.folders.map(folder => {
        if (folder.id === id) folder.title = newTitle
        return folder
      })
    }))
  }

  deleteFolder = (id) => {
    this.setState(prevState => ({
      folders: prevState.folders.filter(folder => folder.id !== id)
    }))
  }

  newFile = (idFolder, title) => {
    this.setState(prevState => ({
      folders: prevState.folders.map(folder => {
        if (folder.id === idFolder) {
          folder.files = [...folder.files, { title }]
        }
        return folder
      })
    }))
  }

  // updateFile = (idFolder, newTitle) => {
  //   this.setState(prevState => ({
  //     folders: prevState.folders.map(folder => {
  //       if (folder.id === id) folder.title = newTitle
  //       return folder
  //     })
  //   }))
  // }

  deleteFile = (idFolder, idFile) => {
    console.log(idFolder, idFile)
    this.setState(prevState => ({
      folders: prevState.folders.filter(folder => {
        if (folder.id === idFolder) {
          folder.files = folder.files.filter(file => file.id !== idFile)
        }
        return folder
      })
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
              deleteFolder: this.deleteFolder,
              logicFile: {
                newFile: this.newFile,
                updateFile: this.updateFile,
                deleteFile: this.deleteFile
              }
            }} />

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
