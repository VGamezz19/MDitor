import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import CircleButton from './CircleButton'
import Sidenav from './Sidenav'
import MyEditor from './MyEditor/'
import MarkDown from './MarkDown'

let id = 6;

class App extends Component {
  constructor() {
    super();
    this.state = {
      select: {
        folderId: 0,
        fileId: 2
      },
      mdSrc: '',
      view: true,
      folders: [{
        id: 0,
        title: 'new Folder1',
        files: [{
          id: 2, title: 'terst file1', content: '', selected: false
        }, { id: 3, title: 'terst file2', content: '', selected: false }]
      }, {
        id: 1,
        title: 'new Folder2',
        files: [{ id: 4, title: 'terst file1', content: '', selected: false }, { id: 5, title: 'terst file2', content: '', selected: false }]
      }],
      user: {
        name: 'Victor',
        surname: 'Gamez'
      }

    }
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
          folder.files = [...folder.files, { title, selected: false, content: '', id: id++ }]
        }
        return folder
      })
    }))
  }

  updateFileContent = (idFolder, idFile, content) => {
    console.log(content)
    this.setState(prevState => ({
      folders: prevState.folders.map(folder => {
        if (folder.id == idFolder) {
          folder.files = folder.files.map(file => {
            if (file.id == idFile) {

              file.content = content
              console.log(file)
            }
            return file
          })
        }
        return folder
      })
    }))
  }

  selectFile = (idFolder, idFile) => {
    this.setState(prevState => ({
      folders: prevState.folders.map(folder => {
        if (folder.id == idFolder) {
          folder.files = folder.files.map(file => {
            if (file.id == idFile) {
              file.selected = true
            }
            return file
          })
        }
        return folder
      })
    }))
  }

  deleteFile = (idFolder, idFile) => {
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

  onChangeEditor = (mdSrc) => {
    this.setState({ mdSrc })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/view/:folderId/:action/:fileId' render={this._renderApp} />

            <Route path='/edit/:folderId/:action/:fileId' render={this._renderApp} />

            <Route exact path='/' render={this._renderApp} />

            <Redirect to="/" />
          </Switch>

        </div>
      </Router>
    );
  }

  _renderApp = (props) => {
    const params = props.match.params

    return <section className="App">
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
        {props.match.path === '/' ?
          false
          : params.action === 'view' ?
            <CircleButton
              ButtonClassName='grey lighten-2'
              IconClassName='black-font'
              icon='edit'
              onClick={() => this.handleRouteToEdit(props)} />
            :
            <CircleButton
              ButtonClassName='grey lighten-2'
              IconClassName='black-font'
              icon='remove_red_eye'
              onClick={() => this.handleRouteToView(props)} />}

      </article>

      <div className='MarkDownEdited'>
        {props.match.path === '/' ?
          <MarkDown initial={true} />
          :
          params.action === 'view' ?
            <MarkDown folders={this.state.folders} folderId={params.folderId} fileId={params.fileId} />
            :
            <MyEditor
              folders={this.state.folders}
              handlerMyEditor={this.updateFileContent} folderId={params.folderId} fileId={params.fileId} />
        }
      </div>
    </section>
  }

  handleRouteToEdit = (props) => {
    props.history.push(`/edit/${this.state.select.folderId}/edit/${this.state.select.fileId}`)
  }

  handleRouteToView = (props) => {
    props.history.push(`/view/${this.state.select.folderId}/view/${this.state.select.fileId}`)
  }
}



export default App;
