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

    handlerCreateFile = (title) => {

        this.setState({ createFile: false })
        console.log("create-new File")
        //TODO
        // this.props.setNewFile(title)
    }


    render() {
        return (
            <li>
                <div class="collapsible-header" onClick={this.handlerClickFolder}>
                    <i class="material-icons">
                        {this.state.folderIcon[0]}
                        {this.state.folderIcon[1]}
                    </i>
                    {this.props.title}
                </div>


                <MenuOptions 
                    title={this.props.title}
                    onRenameFolder={this.props.onRenameFolder}
                    // onDeleteFolder={/*TODO*/}
                    />

                <div class="collapsible-body grey lighten-2">
                    <div className="content-files">
                        {this.props.files.map(file => <File title={file.title} />)}
                        {this.state.createFile ?
                        <Fade left>
                            <AddItem
                                itemType='file'
                                inputType='text'
                                className='files grey lighten-3 files'
                                onSubmit={this.handlerCreateFile} />
                        </Fade>
                        : false}
                        <CircleButton 
                            ButtonClassName='add-files grey lighten-3' 
                            IconClassName='black-font' icon='add'
                            onClick={this.onClickCreateFile} />
                    </div>
                </div>
            </li>
        )
    }
}

export default Folder