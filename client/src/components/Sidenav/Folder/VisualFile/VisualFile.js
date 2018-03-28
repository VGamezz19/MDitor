import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import TextFormat from 'material-ui/svg-icons/content/text-format';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link, Route } from "react-router-dom"
import PropTypes from 'prop-types';
import File from 'mditor-types';
import ModalEdit from "../MenuOptions/ModalEdit";

class VisualFile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            openModal: false
        }
    }

    handlerModalEdit = () => {
        const { openModal } = this.state

        if (openModal) {
            return this.setState({ openModal: false })
        }

        return this.setState({ openModal: true })
    }

    render() {

        const { file, folderId, logicFile, handleToggleSidenav } = this.props
        const { openModal } = this.state
        const modalStyleSize = {width: '30%', maxWidth: 'none'};
        const fileId = file.getId();
        const fileTitle = file.getTitle();
        return (
            <Route
                path={`/${folderId}/${fileId}/(view|edit)`}
                children={({ match }) => (
                    <li className={`li-item-file ${match ? 'focus-file' : false}`}>
                        <Link
                            className='files grey lighten-3'
                            to={`/${folderId}/${fileId}/edit`}
                            onClick={() => handleToggleSidenav()}>
                            <button type='submit' className="files grey lighten-3">
                                {fileTitle}
                            </button>
                        </Link>
                        <MuiThemeProvider>
                            <IconButton className='button-update' onClick={() => this.handlerModalEdit()}>
                                <TextFormat />
                            </IconButton>
                        </MuiThemeProvider>
                        <MuiThemeProvider>
                            <IconButton className='button-delete' onClick={() => logicFile.delete(folderId, fileId)}>
                                <Delete />
                            </IconButton>
                        </MuiThemeProvider>

                        <ModalEdit
                            itemTitle={fileTitle}
                            itemId={fileId}
                            fatherId={folderId}
                            open={openModal}
                            modalSize={modalStyleSize}
                            handlerEdit={logicFile.update}
                            closeModal={this.handlerModalEdit} />
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