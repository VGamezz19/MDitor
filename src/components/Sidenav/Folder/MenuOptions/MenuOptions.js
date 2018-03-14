import React, { Component } from 'react'
import { IconMenu } from 'material-ui/';
import { MenuItem } from 'material-ui/';
import { IconButton } from 'material-ui/';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import TextFormat from 'material-ui/svg-icons/content/text-format';
import Delete from 'material-ui/svg-icons/action/delete';
import { Divider } from 'material-ui/';
import ModalEdit from './ModalEdit'

class MenuOptions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            renameFolder: false
        }
    }

    openModalEdit = () => {
        this.setState({ renameFolder: true })
    }
    closeModalEdit = () => {
        this.setState({ renameFolder: false })
    }

    render() {
        return (
            <div className='icon-menu'>
                <IconMenu
                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}>

                    <MenuItem
                        leftIcon={<TextFormat />}
                        primaryText="Rename..."
                        onClick={this.openModalEdit}
                    />
                    <Divider />

                    <MenuItem
                        leftIcon={<Delete />}
                        primaryText="Delete"
                        onClick={() => this.props.logicOptions.onDelete(this.props.item.id)}

                    />
                </IconMenu>
                <ModalEdit
                    itemTitle={this.props.item.title}
                    itemId={this.props.item.id}
                    open={this.state.renameFolder}
                    handlerEdit={this.props.logicOptions.onUpdate}
                    closeModal={this.closeModalEdit} />
            </div>
        )
    }
}

export default MenuOptions 