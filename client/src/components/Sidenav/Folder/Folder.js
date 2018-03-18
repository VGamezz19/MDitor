import React, { Component } from 'react'
import { Fade } from 'react-reveal'
import { Collapsible } from 'react-materialize'
import PropTypes from 'prop-types';
import File from 'mditor-types';

import MenuOptions from './MenuOptions'
import VisualFile from './VisualFile'
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
        const folderId = this.props.folder.getId()

        this.setState({ creatingFile: false })

        this.props.logicFolder.logicFile.create(folderId, title)
    }

    render() {
        const { folder, logicFolder, logicFolder: { logicFile }, handleToggleSidenav } = this.props
        const { creatingFile, folderIcon } = this.state

        return (
            <Collapsible>
                <li>
                    {this._renderFolderElement(folder, folderIcon)}

                    <MenuOptions
                        item={folder}
                        logicOptions={{
                            onDelete: logicFolder.delete,
                            onUpdate: logicFolder.update
                        }} />

                    {this._renderFiles(folder, logicFile, creatingFile, handleToggleSidenav)}
                </li>
            </Collapsible>
        )
    }

    _renderFolderElement(folder, folderIcon) {
        return (
            <div className="collapsible-header" onClick={this.handlerClickFolder}>
                <i className="material-icons">
                    {folderIcon[0]}
                    {folderIcon[1]}
                </i>
                {folder.getTitle()}
            </div>
        )
    }

    _renderFiles(folder, logicFile, createFile, handleToggleSidenav) {

        return (
            <div className="collapsible-body grey lighten-2">
                <ul className="content-files">
                    {folder.files.map(file => <VisualFile
                        key={file.getId()}
                        file={file}
                        folderId={folder.getId()}
                        logicFile={logicFile}
                        handleToggleSidenav={handleToggleSidenav} />)}

                    {this._renderCreateFile(createFile)}

                    {this._renderCircleButton()}
                </ul>
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
                icon='add'
                onClick={this.handlerCreatingFile} />)
    }
}

Folder.propTypes = {
    /**
     * mandatory type
     * File from ('mditor-types');
     */
    folders: PropTypes.arrayOf(PropTypes.instanceOf(File)),
    /**
     * Object with logic
     */
    logiFolder: PropTypes.shape({
        create: PropTypes.func.isRequired,
        update: PropTypes.func.isRequired,
        delete: PropTypes.func.isRequired,
        logicFile: PropTypes.objectOf(PropTypes.func.isRequired)
    })
}

export default Folder