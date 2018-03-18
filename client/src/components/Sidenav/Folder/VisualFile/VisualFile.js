import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link, Route } from "react-router-dom"
import PropTypes from 'prop-types';
import File from 'mditor-types';

class VisualFile extends Component {
    render() {

        const { file, folderId, logicFile, handleToggleSidenav } = this.props
        const fileId = file.getId();
        const fileTitle = file.getTitle();
        return (
            <Route
                path={`/${folderId}/${fileId}/(view|edit)`}
                children={({ match }) => (
                    <li className={`li-item-file ${match ? 'focus-file' : false}`} onClick={() => handleToggleSidenav()}>
                        <Link className='files grey lighten-3"' to={`/${folderId}/${fileId}/edit`}>
                            <button type='submit' className="files grey lighten-3">
                                {fileTitle}
                            </button>
                        </Link>
                        <MuiThemeProvider>
                            <IconButton className='button-delete' onClick={() => logicFile.delete(folderId, fileId)}>
                                <Delete />
                            </IconButton>
                        </MuiThemeProvider>
                    </li>
                )} />
        )
    }
}

VisualFile.propTypes = {
    /**
     * mandatory type
     * File from ('mditor-types');
     */
    file: PropTypes.instanceOf(File),
    /**
     * Object with logic File
     */
    logicFile: PropTypes.objectOf(PropTypes.func.isRequired)
}

export default VisualFile