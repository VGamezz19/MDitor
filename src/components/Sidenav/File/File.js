import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import { Link, Route } from "react-router-dom"

class File extends Component {
    render() {
        const { file, folderId, logicFile } = this.props
        console.log(this.props)
        return (
            <Route
                path={`/${folderId}/${file.id}/edit`}
                children={({ match }) => (
                    <li className={`li-item-file ${match ? 'focus-file' : false}`}>
                        <Link className='files grey lighten-3"' to={`/${folderId}/${file.id}/edit`}>
                            <button type='submit' className="files grey lighten-3">
                                {file.title}
                            </button>
                        </Link>
                        <IconButton className='button-delete' onClick={() => logicFile.delete(folderId, file.id)}>
                            <Delete />
                        </IconButton>
                    </li>
                )} />
        )
    }
}

export default File