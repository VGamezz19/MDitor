import React, { Component } from 'react'
import { Fade } from 'react-reveal'

import MenuOptions from './MenuOptions'
import File from './File'
import CircleButton from '../../CircleButton'
import AddItem from '../AddItem'


class Folder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            folderIcon: ['chevron_right', 'folder'],
            creatingFile: false
        }
    }

    handlerClickFolder = () => {
        this.setState(({ folderIcon }) => {
            if (folderIcon[1] === 'folder') return { folderIcon: ['expand_more', 'folder_open'] }

            return { folderIcon: ['chevron_right', 'folder'] }
        })
    }

    handlerCreatingFile = () => {
        const { creatingFile } = this.state

        if (creatingFile) {

            return this.setState({ creatingFile: false })
        }

        return this.setState({ creatingFile: true })
    }

    onCreateFile = (title) => {
        const folderId = this.props.folder.id

        this.setState({ creatingFile: false })

        this.props.logicFolder.logicFile.create(folderId, title)
    }

    render() {
        const { folder, logicFolder, logicFolder: { logicFile } } = this.props
        const { creatingFile, folderIcon } = this.state

        return (
            <li>
                {this._renderFolderElement(folder, folderIcon)}

                <MenuOptions
                    item={folder}
                    logicOptions={{
                        onDelete: logicFolder.delete,
                        onUpdate: logicFolder.update
                    }} />

                {this._renderFiles(folder, logicFile, creatingFile)}
            </li>
        )
    }

    _renderFolderElement(folder, folderIcon) {
        return (
            <div className="collapsible-header" onClick={this.handlerClickFolder}>
                <i className="material-icons">
                    {folderIcon[0]}
                    {folderIcon[1]}
                </i>
                {folder.title}
            </div>
        )
    }

    _renderFiles(folder, logicFile, createFile) {

        return (
            <div className="collapsible-body grey lighten-2">
                <div className="content-files">
                    {folder.files.map(file => <File file={file} folderId={folder.id} logicFile={logicFile} />)}

                    {this._renderCreateFile(createFile)}

                    {this._renderCircleButton()}
                </div>
            </div>
        )
    }

    _renderCreateFile(createFile) {
        if (createFile) {
            return (
                <Fade left>
                    <AddItem
                        itemType='file'
                        inputType='text'
                        onSubmit={this.onCreateFile}
                        onCancel={this.handlerCreatingFile} />
                </Fade>)
        }
        return false
    }

    _renderCircleButton() {
        return (
            <CircleButton
                className='add-files grey lighten-3'
                iconClassName='black-font' icon='add'
                onClick={this.handlerCreatingFile} />)
    }
}

export default Folder