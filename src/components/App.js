import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import CircleButton from './CircleButton'
import Sidenav from './Sidenav'
import MyEditor from './MyEditor/'
import MarkDown from './MarkDown'

import API from '../api/ApiClient'

let id = 6;

class App extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      currentSelected: {
        folderId: undefined,
        fileId: undefined,
      },
      folders: [],
      user: {}
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
          folder.files = [...folder.files, { title, content: '', id: id++ }]
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

  writeFile = (folderId, id, content) => {

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
      })
    }))
  }

  retrieveFolder = (id, folders) => {
    const folder = folders.find(folder => folder.id === id)
    return folder
  }

  retrieveFile = (folderId, id, folders) => {
    const folder = this.retrieveFolder(folderId, folders)

    if (!folder) return false

    const file = folder.files.find(file => file.id === id)

    return file
  }

  //===== EVENTS and Handlers APP

  componentDidCatch = (err, info) => this.setState({ hasError: true })

  componentDidMount = () => {
    const folders = API.getFolders()
    const user = API.getUser()

    this.onChangeTargetSelected(this.extractParamsFromRoute(this.props), folders)

    this.setState({ folders, user })
  }

  componentWillReceiveProps = (props, state) => {

    this.onChangeTargetSelected(this.extractParamsFromRoute(props), this.state.folders)
  }

  extractParamsFromRoute = (props) => {
    const { match, match: { params } } = props

    //If URL have some ID Folder/File, then change target selected
    if (match.path !== '/') {

      const folderId = parseInt(params.folderId, 0)
      const fileId = parseInt(params.fileId, 0)

      return { folderId, fileId, match }
    }
    return { folderId: undefined, fileId: undefined, match }

  }

  onChangeTargetSelected = ({ folderId, fileId, match }, folders) => {

    const retrieve = this.retrieveFolder(folderId, folders) && this.retrieveFile(folderId, fileId, folders)

    if (retrieve) return this.setState({ currentSelected: { folderId, fileId } })

    else if (match.path !== '/') {
      return this.onHandlerRouteToRoot(this.props)
    }
  }


  onSelectFile = (options, folderId, id) => {
    //this.onChangeTargetSelected(folderId, id)
    //this.r(options, folderId, id)
  }

  onHandlerMyEditor = (content) => {

    const { currentSelected: { folderId, fileId } } = this.state

    this.writeFile(folderId, fileId, content)
  }

  onHandlerRouteToEdit = (props, folderId, fileId) => props.history.push(`/${folderId}/${fileId}/edit`)

  onHandlerRouteToView = (props, folderId, fileId) => props.history.push(`/${folderId}/${fileId}/view`)

  onHandlerRouteToRoot = (props) => props.history.push('/')

  render() {
    if (this.state.hasError) {
      return <Redirect to='/' />
    }

    const { match, match: { params } } = this.props
    const { currentSelected: { folderId, fileId }, user: { name, surname }, folders } = this.state
    const matchFolderFile = this.retrieveFile(folderId, fileId, folders) && this.retrieveFolder(folderId, folders)

    const logicFoler = {
      newFolder: this.createFolder,
      updateFolder: this.updateFolder,
      deleteFolder: this.deleteFolder,
      logicFile: {
        newFile: this.createFile,
        updateFile: this.updateFile,
        deleteFile: this.deleteFile,
        selectOneFile: this.onSelectFile,
        options: this.props
      }
    }

    return (
      <section className="App">
        <article>
          <Sidenav
            buttonTriggerStyle={{ buttonClassName: 'grey lighten-2', iconClassName: null, icon: 'menu' }}
            buttonDropStyle={{ buttonClassName: null, iconClassName: 'black-font', icon: 'close' }}
            user={{ name, surname }}
            folders={folders}
            logicFolder={logicFoler} />

          {match.path === '/' ?
            false
            : params.action === 'view' ?
              <CircleButton
                ButtonClassName='grey lighten-2'
                IconClassName='black-font'
                icon='edit'
                onClick={() => this.onHandlerRouteToEdit(this.props, folderId, fileId)} />
              :
              <CircleButton
                ButtonClassName='grey lighten-2'
                IconClassName='black-font'
                icon='remove_red_eye'
                onClick={() => this.onHandlerRouteToView(this.props, folderId, fileId)} />}

        </article>
        {folderId !== undefined ?
          <div className='MarkDownEdited'>
            {match.path === '/' ?
              <MarkDown initial={true} />
              :
              matchFolderFile ?
                params.action === 'view' ?
                  <MarkDown file={this.retrieveFile(folderId, fileId, folders)} />
                  :
                  <MyEditor
                    file={this.retrieveFile(folderId, fileId, folders)}
                    handlerMyEditor={this.onHandlerMyEditor} />
                : <Redirect to='/' />
            }
          </div>
          : <div className='MarkDownEdited'><MarkDown initial={true} /></div>}

      </section>
    );
  }
}

const Routing = (props) => {
  return <Router>
    <div>
      <Switch>
        <Route exact path='/:folderId/:fileId/:action(view|edit)' component={App} />

        <Route exact path='/' component={App} />

        <Redirect to="/" />
      </Switch>

    </div>
  </Router>
}


export default Routing;