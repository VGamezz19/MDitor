import React, { Component } from 'react'
import MenuOptions from './MenuOptions'
import File from '../File'
import CircleButton from '../../CircleButton'
class Folder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            folderIcon: ['chevron_right', 'folder']
        }
    }

    handlerClickFolder = () => {
        this.setState(prevState => {
            if (prevState.folderIcon[1] === 'folder') return { folderIcon: ['expand_more', 'folder_open'] }

            return { folderIcon: ['chevron_right', 'folder'] }
        })
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

                {/* Todo handlers MenuOptions */}
                <MenuOptions title={this.props.title}/>

                <div class="collapsible-body grey lighten-2">
                    <div className="content-files">
                        {this.props.files.map(file => <File title={file.title} />)}
                        <CircleButton ButtonClassName='add-files grey lighten-3' IconClassName='black-font' icon='add' />
                    </div>
                </div>
            </li>
        )
    }
}

export default Folder