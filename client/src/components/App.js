import React, { Component } from 'react';

import { ProgressBar } from "react-materialize";

import CircleButton from './CircleButton'
import Sidenav from './Sidenav'
import MyEditor from './MyEditor/'
import MarkDown from './MarkDown'

import logic from "../logic";

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

  /**
   * 
   * Business App.js function creeateFolder
   *
   * async funtion to create a new folder. When logic.folder.create promise has finished
   * then state from component will update
   * 
   * @param {String} title title for new Folder
   *
   * @returns {RenderDOM} will update DOM with new folder
   *
   * @version 1.0.0
   */
  createFolder = async (title) => {

    const addedNewFolder = await logic.folder.create(title, this.state.folders);

    this.setState({ folders: addedNewFolder })
  }

  /**
   * 
   * Business App.js function updateFolder
   *
   * function to update the specifict title folder. It will update component state
   * 
   * @param {String} id id from updated Folder
   * @param {String} title title for to rename Folder
   *
   * @returns {RenderDOM} will update DOM with folder renamed
   *
   * @version 1.0.0
   */
  updateFolder = (id, title) => this.setState(({ folders }) => ({ folders: logic.folder.update(id, title, folders) }))

  /**
   * 
   * Business App.js function deleteFolder
   *
   * function to delete the specifict folder. It will update component state
   * 
   * @param {String} id id from delete Folder
   *
   * @returns {RenderDOM} will update DOM with folder delted
   *
   * @version 1.0.0
   */
  deleteFolder = (id) => this.setState(({ folders }) => ({ folders: logic.folder.remove(id, folders) }))

  /**
   * 
   * Business App.js function createFile
   *
   * async funtion to create a new file. When logic.file.create promise has finished
   * then state from component will update
   * 
   * @param {String} id id of the Folder that will contain the file
   * @param {String} title title for new File
   *
   * @returns {RenderDOM} will update DOM with new file
   *
   * @version 1.0.0
   */
  createFile = async (folderId, title) => {

    const addedNewFileInFolder = await logic.file.create(folderId, title, this.state.folders);

    this.setState({ folders: addedNewFileInFolder })
  }

  /**
   * 
   * Business App.js function deleteFile
   *
   * function to delete the specifict file. It will update component state
   * 
   * @param {String} folderId id of the Folder that will contain the file
   * @param {String} id id from delete file
   *
   * @returns {RenderDOM} will update DOM with file deleted
   *
   * @version 1.0.0
   */
  deleteFile = (folderId, id) => this.setState(({ folders }) => ({ folders: logic.file.remove(folderId, id, folders) }))

  /**
   * 
   * Business App.js function writeFile
   *
   * function to write in the specifict file the updated content. It will update component state
   * 
   * @param {String} folderId id of the Folder that will contain the file
   * @param {String} id id from updated file
   * @param {String} content content updated from file
   *
   * @returns {RenderDOM} will update DOM with file renamed
   *
   * @version 1.0.0
   */
  writeFile = (folderId, id, content) => this.setState(({ folders }) => ({ folders: logic.file.write(folderId, id, content, folders) }))

  //---------------------------------------
  /**
   * 
   * Event, Handlers and Helpers for App.js
   * 
   * @version 1.0.0
   */

  componentDidMount = async () => {

    const tokenUser = await logic.user.login("vgamez", "123");

    const user = await logic.user.retrieve(tokenUser);

    const folderDataAPI = user.folders

    const folders = logic.refactorDataToFileType(folderDataAPI)

    await this.setState({ folders, user, loader: false })

    this.onChangeTargetSelected(this.extractParamsFromRoute(this.props), folders)

    document.addEventListener('keydown', this._hanlderEditOrView, false);
  }

  componentWillReceiveProps = (props, state) => {

    this.onChangeTargetSelected(this.extractParamsFromRoute(props), this.state.folders)
  }

  componentWillUnmount = () => {

    document.removeEventListener('keydown', this._hanlderEditOrView, false);
  }

  extractParamsFromRoute = (props) => {
    const { match, match: { params } } = props

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

  _hanlderEditOrView = (event) => {
    if ((event.ctrlKey || event.metaKey) && event.keyCode === 13) {
      event.preventDefault()

      const { match: { params } } = this.props

      const { currentSelected: { folderId, fileId } } = this.state

      if (params.action === "view") {

        return this.onHandlerRouteToEdit(this.props, folderId, fileId);
      } else {

        return this.onHandlerRouteToView(this.props, folderId, fileId);
      }
    }
  }

  /**
   * 
   * Render ReactDOM
   * 
   * @version 1.0.0
   */
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

    let matchExist

    if (match.path !== '/') matchExist = this.checkFileExist({ folderId, fileId, match }, folders)

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
            {matchExist ? <h3 className='title-current-file'>{logic.file.retrieve(folderId, fileId, folders).getTitle()}</h3> : false}

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
                matchExist ?
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