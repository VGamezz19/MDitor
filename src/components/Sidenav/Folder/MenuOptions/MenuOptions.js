import React, { Component } from 'react'
import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class MenuOptions extends Component {
    render() {
        return (
            <IconMenu
                className='icon-menu'
                iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}>

                {/* Todo */}
                {/* <div className='test'>
                    <Input s={6} label="Title Folder" defaultValue={this.props.title} />
                </div> */}

                {/* <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Send feedback" />
                <MenuItem primaryText="Settings" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" /> */}
            </IconMenu>
        )
    }
}

export default MenuOptions 