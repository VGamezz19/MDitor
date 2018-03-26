import React, { Component } from 'react';
import { Fade } from 'react-reveal'
import PropTypes from 'prop-types';
import File from 'mditor-types';
import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from "react-router-dom"

import CircleButton from '../CircleButton'
import Folder from './Folder'
import AddItem from './AddItem'

class Sidenav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            creatingFolder: false
        }
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    handlerCreatingFolder = () => {
        const { creatingFolder } = this.state

        if (creatingFolder) {

            return this.setState({ creatingFolder: false })
        }

        return this.setState({ creatingFolder: true })
    }

    onCreateFolder = (title) => {

        this.setState({ creatingFolder: false })

        this.props.logicFolder.create(title)
    }

    render() {
        const { buttonTriggerStyle, buttonDropStyle, user, folders, logicFolder } = this.props
        const { creatingFolder } = this.state

        return (
            <div>
                {this._renderTriggerButton(buttonTriggerStyle)}
                <MuiThemeProvider>
                    <Drawer
                        containerClassName='main-sidenav-content'
                        docked={false}
                        width={300}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({ open })}>
                        <section className='content-sidenav'>
                            {this._renderHeader(user, buttonDropStyle)}

                            {this._renderBodySidenav(folders, logicFolder)}

                            {this._renderCreateFolder(creatingFolder)}

                            <CircleButton className='add-folder grey' icon='add' onClick={this.handlerCreatingFolder} />
                        </section>
                    </Drawer>
                </MuiThemeProvider>
            </div>
        )
    }

    _renderTriggerButton({ className, icon }) {
        return (
            <CircleButton
                className={className}
                onClick={this.handleToggle}
                icon={icon} />
        )
    }

    _renderHeader({ name, surname }, { icon, className }) {
        if (name || surname) {
            return (
                <header>
                    <CircleButton
                        className={`delete-sidenav ${className}`}
                        onClick={this.handleToggle}
                        icon={icon} />
                    <Link to='/' onClick={this.handleToggle}>
                        <h4 id={'user-header'}>{name[0]}{surname[0]}</h4>
                        <h5>Welcome</h5>
                    </Link>

                </header>)
        }
        return false
    }

    _renderBodySidenav(folders, logicFolder) {
        return folders.map(folder => <Folder
            key={folder.getId()}
            logicFolder={logicFolder}
            folder={folder}
            handleToggleSidenav={this.handleToggle} />)
    }

    _renderCreateFolder(creatingFolder) {
        if (creatingFolder) {
            return (
                <Fade left>
                    <AddItem
                        itemType='folder'
                        inputType='text'
                        onSubmit={this.onCreateFolder}
                        onCancel={this.handlerCreatingFolder} />
                </Fade>
            )
        }
        return false
    }
}

Sidenav.propTypes = {
    /**
     * mandatory type
     * File from ('mditor-types');
     */
    folders: PropTypes.arrayOf(PropTypes.instanceOf(File)),
    /**
     * Object with logic
     */
    logiFolder: PropTypes.shape({
        create: PropTypes.func.isRequired,
        update: PropTypes.func.isRequired,
        delete: PropTypes.func.isRequired,
        logicFile: PropTypes.objectOf(PropTypes.func.isRequired)
    }),
    // logicFolder:  PropTypes.objectOf(PropTypes.func.isRequired),
}

export default Sidenav