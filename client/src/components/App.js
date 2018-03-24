import React, { Component } from 'react';

import { ProgressBar } from "react-materialize";
import CircleButton from './CircleButton'
import Sidenav from './Sidenav'
import MyEditor from './MyEditor/'
import MarkDown from './MarkDown'

import logic from "../logic";

console.log(logic)

class App extends Component {

  constructor() {
    super();

    this.state = {
      currentSelected: {
        folderId: undefined,
        fileId: undefined,
      },
      folders: [],
      user: {},
      loader: true
    }
  }

  createFolder = async (title) => {

    const addedNewFolder = await logic.folder.create(title, this.state.folders);

    this.setState({ folders: addedNewFolder })
  }

  updateFolder = (id, title) => this.setState(({ folders }) => ({ folders: logic.folder.update(id, title, folders) }))

  deleteFolder = (id) => this.setState(({ folders }) => ({ folders: logic.folder.remove(id, folders) }))

  createFile = async (folderId, title) => {

    const addedNewFileInFolder = await logic.file.create(folderId, title, this.state.folders);

    this.setState({ folders: addedNewFileInFolder })
  }

  deleteFile = (folderId, id) => this.setState(({ folders }) => ({ folders: logic.file.remove(folderId, id, folders) }))

  writeFile = (folderId, id, content) => this.setState(({ folders }) => ({ folders: logic.file.write(folderId, id, content, folders) }))

  //===== EVENTS, Handlers and Helpers APP

  componentDidMount = async () => {

    const tokenUser = await logic.user.login("vgamez","123");

    const user = await logic.user.retrieve(tokenUser);

    const folderDataAPI = user.folders

    const folders = logic.refactorDataToFileType(folderDataAPI)

    await this.setState({ folders, user, loader:false })

    this.onChangeTargetSelected(this.extractParamsFromRoute(this.props), folders)
  }

  componentWillReceiveProps = (props, state) => {

    this.onChangeTargetSelected(this.extractParamsFromRoute(props), this.state.folders)
  }

  extractParamsFromRoute = (props) => {
    const { match, match: { params } } = props

    //If URL have some ID Folder/File, then change target selected
    if (match.path !== '/') {

      const folderId = params.folderId
      const fileId = params.fileId

      return { folderId, fileId, match }
    }
    return { folderId: undefined, fileId: undefined, match }

  }

  onChangeTargetSelected = ({ folderId, fileId, match }, folders) => {

    const fileExist = this.checkFileExist({ folderId, fileId, match }, folders)

    if (fileExist) return this.setState({ currentSelected: { folderId, fileId } })
  }

  checkFileExist = ({ folderId, fileId, match }, folders) => {

    const retrieve = logic.folder.retrieve(folderId, folders) && logic.file.retrieve(folderId, fileId, folders)

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
    const { currentSelected: { folderId, fileId }, user: { name, surname }, folders, loader } = this.state

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
      !loader ?
        <section className="App">
        <article>
          <Sidenav
            buttonTriggerStyle={{ className: 'grey lighten-2', icon: 'menu' }}
            buttonDropStyle={{ className: 'grey lighten-2', icon: 'close' }}
            user={{ name, surname }}
            folders={folders}
            logicFolder={logicFolder} />

          {match.path === '/' ?
            false
            : params.action === 'view' ?
              <CircleButton
                className='grey lighten-2'
                icon='edit'
                onClick={() => this.onHandlerRouteToEdit(this.props, folderId, fileId)} />
              :
              <CircleButton
                className='grey lighten-2'
                icon='remove_red_eye'
                onClick={() => this.onHandlerRouteToView(this.props, folderId, fileId)} />}

        </article>
        <div className='mark-down-edited'>
          {folderId !== undefined ?
            match.path === '/' ?
              <MarkDown showInitialMarkDown={true} />
              :
              this.checkFileExist({ folderId, fileId, match }, this.state.folders) ?
                params.action === 'view' ?
                  <MarkDown file={logic.file.retrieve(folderId, fileId, folders)} />
                  :
                  <MyEditor
                    file={logic.file.retrieve(folderId, fileId, folders)}
                    emitCurrentContent={this.onHandlerMyEditor} />
                : false
            : <MarkDown showInitialMarkDown={true} />}
        </div>
      </section> 
      : <ProgressBar className={"pre-loader-home"} />
    );
  }
}

export default App;