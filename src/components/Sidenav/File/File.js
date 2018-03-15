import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import { Link, Route } from "react-router-dom"

class File extends Component {
    handlerClickFile = () => {
        console.log('click FILE')
    }
    handllerClickDelete = () => {
        const idFolder = this.props.idFolder
        const idFile = this.props.idFile

        this.props.deleteFile(idFolder, idFile)
    }
    handlerSelectOneFile = () => {
        const idFolder = this.props.idFolder
        const idFile = this.props.idFile
        const options = this.props.options



        this.props.selectOneFile(options, idFolder, idFile)
    }
    render() {
        return (
            <Route
                path={`/${this.props.idFolder}/${this.props.idFile}/edit`}
                children={({ match }) => (
                    <li className={`li-item-file  gey lighten-3 ${match ? 'focus-file' : false}`}>
                        <Link className='files grey lighten-3"' to={`/${this.props.idFolder}/${this.props.idFile}/edit`}>
                            <button type='submit' className="files grey lighten-3" onClick={this.handlerSelectOneFile}>

                                {this.props.title}

                            </button>
                        </Link>
                        <IconButton className='button-delete' onClick={this.handllerClickDelete}>
                            <Delete />
                        </IconButton>
                    </li>
                )} />
        )
    }
}

export default File