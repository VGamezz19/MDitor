import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';


class File extends Component {
    handlerClickFile = () => {
        console.log('click FILE')
    }
    handllerClickDelete = () => {
        const idFolder = this.props.idFolder
        const idFile = this.props.idFile
 
        this.props.deleteFile(idFolder, idFile)
    }
    handlerSelectOneFile =  () => {
        const idFolder = this.props.idFolder
        const idFile = this.props.idFile
        const options = this.props.options

        this.props.selectOneFile(options, idFolder, idFile)
    }
    render() {
        return (
            <li className={`li-item-file ${this.props.selected ? 'focus-file': false}`}>
                <button type='submit' className="files grey lighten-3" onClick={this.handlerSelectOneFile}>
                    {this.props.title}
                </button>
                <IconButton className='button-delete' onClick={this.handllerClickDelete}>
                    <Delete />
                </IconButton>
            </li>
        )
    }
}

export default File