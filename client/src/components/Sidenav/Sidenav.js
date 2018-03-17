import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon } from 'react-materialize'
import { Fade } from 'react-reveal'
import PropTypes from 'prop-types';
import File from 'mditor-types';

import CircleButton from '../CircleButton'
import Folder from './Folder'
import AddItem from './AddItem'

class Sidenav extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            creatingFolder: false
        }
    }

    handlerCreatingFolder = () => {
        const { creatingFolder } = this.state

        if (creatingFolder) {

          return  this.setState({ creatingFolder: false })
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
            <SideNav
                className='side-nav grey lighten-2'
                trigger={
                    this._renderTriggerButton(buttonTriggerStyle)
                }
                options={{
                    closeOnClick: true
                }}>

                <section className='content-sidenav'>

                    {this._renderHeader(user, buttonDropStyle)}  

                    {this._renderBodySidenav(folders, logicFolder)}

                    {this._renderCreateFolder(creatingFolder)}

                    <CircleButton className='add-folder grey' icon='add' onClick={this.handlerCreatingFolder} />
                </section>
            </SideNav>
        )
    }

    _renderTriggerButton({className, icon}) {
        return <Button
            floating large
            className={className}
            waves='light'>
            <Icon className='triggerIcon'> {icon}</Icon>
        </Button>
    }

    _renderHeader({ name, surname }, { iconClassName, icon}) {
        if (name || surname) {
            return (
                <header>
                    <SideNavItem className='delete-sidenav'>
                        <Icon className={iconClassName}>{icon}</Icon>
                    </SideNavItem>
                    <h4 id={'user-header'}>{name[0]}{surname[0]}</h4>
                    <h5>Welcome</h5>
                </header>)
        }
        return false
    }

    _renderBodySidenav(folders, logicFolder) {
        return folders.map(folder => <Folder key={folder.getId()} logicFolder={logicFolder} folder={folder} />)
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