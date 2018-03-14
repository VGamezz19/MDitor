import React, { Component } from 'react'
import MenuOptions from './MenuOptions'
import File from '../File'
import CircleButton from '../../CircleButton'
import { Fade } from 'react-reveal'
import AddItem from '../AddItem'


class Folder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            folderIcon: ['chevron_right', 'folder'],
            createFile: false
        }
    }

    handlerClickFolder = () => {
        this.setState(prevState => {
            if (prevState.folderIcon[1] === 'folder') return { folderIcon: ['expand_more', 'folder_open'] }

            return { folderIcon: ['chevron_right', 'folder'] }
        })
    }

    onClickCreateFile = () => this.state.createFile ? true : this.setState({ createFile: true })

    onCancelCreateFile = () => this.state.createFile ? this.setState({ createFile: false }) : false

    handlerCreateFile = (title) => {
        const titleFile = title
        const idFoler = this.props.folder.id

        this.setState({ createFile: false })
        this.props.logicFolder.logicFile.newFile(idFoler, titleFile)
    }


    render() {
        return (
            <li>
                {this._renderBodyFolder()}

                <MenuOptions
                    item={this.props.folder}
                    logicOptions={{
                        onDelete: this.props.logicFolder.deleteFolder,
                        onUpdate: this.props.logicFolder.updateFolder
                    }} />

                {this._renderFiles()}
            </li>
        )
    }

    _renderBodyFolder() {
        return (
            <div class="collapsible-header" onClick={this.handlerClickFolder}>
                <i class="material-icons">
                    {this.state.folderIcon[0]}
                    {this.state.folderIcon[1]}
                </i>
                {this.props.folder.title}
            </div>
        )
    }

    _renderFiles() {
        
        return (
            <div class="collapsible-body grey lighten-2">
                <div className="content-files">
                    {this.props.folder.files.map(file => {
                        return <File 
                            idFile={file.id} 
                            idFolder={this.props.folder.id}
                            selected={file.selected}
                            title={file.title}
                            deleteFile = {this.props.logicFolder.logicFile.deleteFile}
                            selectOneFile={this.props.logicFolder.logicFile.selectOneFile}
                            options= {this.props.logicFolder.logicFile.options}  />
                    })}
                    {this.state.createFile ?
                        <Fade left>
                            {/* <Fade left collapse when={this.state.createFile}> */}
                            <AddItem
                                itemType='file'
                                inputType='text'
                                className='grey lighten-3'
                                onSubmit={this.handlerCreateFile}
                                onCancel={this.onCancelCreateFile} />
                        </Fade>
                        : false}
                    <CircleButton
                        ButtonClassName='add-files grey lighten-3'
                        IconClassName='black-font' icon='add'
                        onClick={this.onClickCreateFile} />
                </div>
            </div>
        )
    }
}

export default Folder