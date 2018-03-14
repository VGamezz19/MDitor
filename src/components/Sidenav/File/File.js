import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';


class File extends Component {
    handlerClickFile = () => {
        console.log('click FILE')
    }
    handllerClickDelete = () => {
        const idFoler = this.props.idFolder
        const idFile = this.props.idFile
 
        this.props.deleteFile(idFoler, idFile)
    }
    render() {
        return (
            <li className='li-item-file'>
                <button type='submit' className="files grey lighten-3" onClick={this.handlerClickFile}>
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