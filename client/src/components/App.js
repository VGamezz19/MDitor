import React, { Component } from 'react';

import CircleButton from './CircleButton'
import Sidenav from './Sidenav'
import MyEditor from './MyEditor/'
import MarkDown from './MarkDown'

import API from '../api/ApiClient'
import logicApp from './logicApp'

import File from 'mditor-types'

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentSelected: {
        folderId: undefined,
        fileId: undefined,
      },
      folders: [],
      user: {}
    }
  }

  createFolder = (title) => this.setState(({ folders }) => ({ folders: logicApp.Folder.create(title, folders) }))

  updateFolder = (id, title) => this.setState(({ folders }) => ({ folders: logicApp.Folder.update(id, title, folders) }))

  deleteFolder = (id) => this.setState(({ folders }) => ({ folders: logicApp.Folder.remove(id, folders) }))

  createFile = (folderId, title) => this.setState(({ folders }) => ({ folders: logicApp.File.create(folderId, title, folders) }))

  deleteFile = (folderId, id) => this.setState(({ folders }) => ({ folders: logicApp.File.remove(folderId, id, folders) }))

  writeFile = (folderId, id, content) => this.setState(({ folders }) => ({ folders: logicApp.File.write(folderId, id, content, folders) }))

  //===== EVENTS, Handlers and Helpers APP
  componentDidMount = () => {
    const folderDataAPI = API.getFolders()
    const user = API.getUser()

    let folders = []

    for (let i = 0; i < folderDataAPI.length; i++) {

      let filesToFolder = []
      const {id, title, files: folderFiles} = folderDataAPI[i];
      if(folderFiles) {

        let fileLength = folderFiles.length

        for (let i = 0; i < fileLength; i ++) {

          const {id, title, content} = folderFiles[i];

          filesToFolder.push(new File('file',id, title, content))
        }
      }

      folders.push(new File("folder", id, title, undefined, filesToFolder))
    }

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

    const fileExist = this.checkFileExist({ folderId, fileId, match }, folders)

    if (fileExist) return this.setState({ currentSelected: { folderId, fileId } })
  }

  checkFileExist = ({ folderId, fileId, match }, folders) => {

    const retrieve = logicApp.Folder.retrieve(folderId, folders) && logicApp.File.retrieve(folderId, fileId, folders)

    if (!retrieve && match.path !== '/') {

      return this.onHandlerRouteToRoot(this.props)
    }

    return true
  }

  onHandlerMyEditor = (content) => {

    const { currentSelected: { folderId, fileId } } = this.state

    this.writeFile(folderId, fileId, content)
  }

  onHandlerRouteToEdit = (props, folderId, fileId) => props.history.push(`/${folderId}/${fileId}/edit`)

  onHandlerRouteToView = (props, folderId, fileId) => props.history.push(`/${folderId}/${fileId}/view`)

  onHandlerRouteToRoot = (props) => props.history.push('/')

  render() {

    const { match, match: { params } } = this.props
    const { currentSelected: { folderId, fileId }, user: { name, surname }, folders } = this.state

    const logicFolder = {
      create: this.createFolder,
      update: this.updateFolder,
      delete: this.deleteFolder,
      logicFile: {
        create: this.createFile,
        delete: this.deleteFile,
      }
    }

    return (
      <section className="App">
        <article>
          <Sidenav
            buttonTriggerStyle={{ className: 'grey lighten-2', iconClassName: null, icon: 'menu' }}
            buttonDropStyle={{ className: null, iconClassName: 'black-font', icon: 'close' }}
            user={{ name, surname }}
            folders={folders}
            logicFolder={logicFolder} />

          {match.path === '/' ?
            false
            : params.action === 'view' ?
              <CircleButton
                className='grey lighten-2'
                iconClassName='black-font'
                icon='edit'
                onClick={() => this.onHandlerRouteToEdit(this.props, folderId, fileId)} />
              :
              <CircleButton
                className='grey lighten-2'
                iconClassName='black-font'
                icon='remove_red_eye'
                onClick={() => this.onHandlerRouteToView(this.props, folderId, fileId)} />}

        </article>
        <div className='MarkDownEdited'>
          {folderId !== undefined ?
            match.path === '/' ?
              <MarkDown showInitialMarkDown={true} />
              :
              this.checkFileExist({ folderId, fileId, match }, folders) ?
                params.action === 'view' ?
                  <MarkDown file={logicApp.File.retrieve(folderId, fileId, folders)} />
                  :
                  <MyEditor
                    file={logicApp.File.retrieve(folderId, fileId, folders)}
                    emitCurrentContent={this.onHandlerMyEditor} />
                : false
            : <MarkDown showInitialMarkDown={true} />}
        </div>
      </section>
    );
  }
}

export default App;