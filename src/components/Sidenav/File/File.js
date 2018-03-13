import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';


class File extends Component {
    handlerClickFile = () => {
        console.log('click FILE')
    }
    handllerClickDelete = () => {
        console.log('delete Filde')
    }
    render() {
        return (
            <li class='li-item-file'>
                <button type='submit' class="files grey lighten-3" onClick={this.handlerClickFile}>
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