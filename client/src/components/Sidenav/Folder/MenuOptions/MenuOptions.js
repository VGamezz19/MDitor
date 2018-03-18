import React, { Component } from 'react'
import { IconMenu, MenuItem, IconButton, Divider } from 'material-ui/';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextFormat from 'material-ui/svg-icons/content/text-format';
import Delete from 'material-ui/svg-icons/action/delete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PropTypes from 'prop-types';
import File from 'mditor-types';

import ModalEdit from './ModalEdit'

class MenuOptions extends Component {
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
        const { logicOptions, item } = this.props
        const { openModal } = this.state
        const modalStyleSize = {width: '30%', maxWidth: 'none'};

        return (
            <div className='icon-menu'>
                <MuiThemeProvider>
                    <IconMenu
                        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}>

                        <MenuItem
                            leftIcon={<TextFormat />}
                            primaryText="Rename..."
                            onClick={this.handlerModalEdit}
                        />
                        <Divider />

                        <MenuItem
                            leftIcon={<Delete />}
                            primaryText="Delete"
                            onClick={() => logicOptions.onDelete(item.getId())}

                        />
                    </IconMenu>
                </MuiThemeProvider>
                <ModalEdit
                    itemTitle={item.getTitle()}
                    itemId={item.getId()}
                    open={openModal}
                    modalSize={modalStyleSize}
                    handlerEdit={logicOptions.onUpdate}
                    closeModal={this.handlerModalEdit} />
            </div>
        )
    }
}

MenuOptions.propTypes = {
    /**
     * mandatory type
     * File from ('mditor-types');
     */
    folder: PropTypes.arrayOf(PropTypes.instanceOf(File)),
    /**
     * Object with logic
     */
    logicOptions: PropTypes.shape({
        onUpdate: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
    })
}

export default MenuOptions 