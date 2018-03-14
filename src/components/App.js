import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Redirect, Switch, Link } from "react-router-dom";

import CircleButton from './CircleButton'
import Sidenav from './Sidenav'
import MyEditor from './MyEditor/'
import MarkDown from './MarkDown'

import APICLIENT from './APIClient'

let id = 6;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentSelected: {
        folderId: 0,
        fileId: 2,
        currentContent: {content:''}
      },
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

  createFolder = (title) => this.setState(prevState => ({ folders: [...prevState.folders, { title, id: id++, files: [] }] }))

  updateFolder = (id, title) => {
    this.setState(prevState => ({
      folders: prevState.folders.map(folder => {
        if (folder.id === id) folder.title = title
        return folder
      })
    }))
  }

  deleteFolder = (id) => {
    this.setState(prevState => ({
      folders: prevState.folders.filter(folder => folder.id !== id)
    }))
  }

  createFile = (folderId, title) => {
    this.setState(prevState => ({
      folders: prevState.folders.map(folder => {
        if (folder.id === folderId) {
          folder.files = [...folder.files, { title, selected: false, content: '', id: id++ }]
        }
        return folder
      })
    }))
  }

  deleteFile = (folderId, id) => {
    this.setState(prevState => ({
      folders: prevState.folders.filter(folder => {
        if (folder.id === folderId) {
          folder.files = folder.files.filter(file => file.id !== id)
        }
        return folder
      })
    }))
  }

  writeFileContent = (folderId, id, content) => {
    
    this.setState(prevState => ({
      folders: prevState.folders.map(folder => {
        if (folder.id === folderId) {
          folder.files = folder.files.map(file => {
            if (file.id === id) {
              
              file.content = content
            }
            return file
          })
        }
        return folder
      }),
      currentSelected: { folderId, fileId: id, currentContent: this.findFilterContent(folderId, id, prevState.folders)}
    }))
  }

  findFilterContent = (folderId, fileId, folders) => {

    let folder = folders.find(folder => folder.id === folderId)
    

    let file = folder.files.find(file => file.id === fileId)

    return file
  }

  //==== Event APP === 

  onSelectFile = (options, folderId, id) => {
    this.onChangeTargetSelected(folderId, id)
    this.onHandleRouteToView(options, folderId, id)
  }

  onHandleRouteToEdit = (props, folderId, fileId) => {
    props.history.push(`/edit/${folderId}/edit/${fileId}`)
  }

  onHandleRouteToView = (props, folderId, fileId) => {
    props.history.push(`/view/${folderId}/view/${fileId}`)
  }

  onChangeTargetSelected = (folderId, fileId) => {
    this.setState(prevState => ({
      folders: prevState.folders.map(folder => {
        if (folder.id === folderId) {
          folder.files = folder.files.map(file => {
            if (file.id === fileId) {
              file.selected = true
            }
            file.selected = false //DesSelect Other Files.  
            return file
          })
        }
        return folder
      }),
      currentSelected: { folderId, fileId, currentContent: this.findFilterContent(folderId, fileId, prevState.folders) }
    }))
  }

  onHandlerMyEditor = (content) => {
    this.writeFileContent(this.state.currentSelected.folderId, this.state.currentSelected.fileId, content)
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
    const match= props.match
    //If URL have some ID Folder/File, then change target selected
    
    if (match.path !== '/') {
      const folderId =parseInt(params.folderId)
      const fileId = parseInt(params.fileId) 

      if ( folderId  !== this.state.currentSelected.folderId || fileId !== this.state.currentSelected.fileId) {
        this.onChangeTargetSelected(folderId, fileId)
      }
    }

    return <section className="App">
      <article>
        <Sidenav
          buttonTriggerStyle={{ buttonClassName: 'grey lighten-2', iconClassName: null, icon: 'menu' }}
          buttonDropStyle={{ buttonClassName: null, iconClassName: 'black-font', icon: 'close' }}
          user={{ name: this.state.user.name, surname: this.state.user.surname }}
          folders={this.state.folders}
          logicFolder={{
            newFolder: this.createFolder,
            updateFolder: this.updateFolder,
            deleteFolder: this.deleteFolder,
            logicFile: {
              newFile: this.createFile,
              updateFile: this.updateFile,
              deleteFile: this.deleteFile,
              selectOneFile: this.onSelectFile,
              options: props
            }
          }} />
        {props.match.path === '/' ?
          false
          : params.action === 'view' ?
            <CircleButton
              ButtonClassName='grey lighten-2'
              IconClassName='black-font'
              icon='edit'
              onClick={() => this.onHandleRouteToEdit(props, this.state.currentSelected.folderId, this.state.currentSelected.fileId)} />
            :
            <CircleButton
              ButtonClassName='grey lighten-2'
              IconClassName='black-font'
              icon='remove_red_eye'
              onClick={() => this.onHandleRouteToView(props, this.state.currentSelected.folderId, this.state.currentSelected.fileId)} />}

      </article>

      <div className='MarkDownEdited'>
        {props.match.path === '/' ?
          <MarkDown initial={true} />
          :
          params.action === 'view' ?
            <MarkDown
              initial={false}
              file={this.state.currentSelected.currentContent} />
            :
            <MyEditor
              handlerMyEditor={this.onHandlerMyEditor}
              file={this.state.currentSelected.currentContent} />
        }
      </div>
    </section>
  }
}

export default App;