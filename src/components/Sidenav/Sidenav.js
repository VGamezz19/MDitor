import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon, Collapsible } from 'react-materialize'
import CircleButton from '../CircleButton'
import Folder from './Folder'
import { Fade } from 'react-reveal'
import AddItem from './AddItem'

class Sidenav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createFolder: false,
            canceled: false
        }
    }

    onClickCreateFolder = () => this.state.createFolder ? true : this.setState({ createFolder: true })

    onCancelCreateFolder = () => this.state.createFolder ? this.setState({ createFolder: false }) : false

    handlerCreateFolder = (title) => {

        this.setState({ createFolder: false })

        this.props.setNewFolder(title)
    }

    render() {
        return (
            <SideNav
                className='side-nav grey lighten-2'
                trigger={
                    this._renderTriggerButton()
                }
                options={{
                    closeOnClick: true
                }}>

                <section className='content-sidenav'>
                    {this._renderHeader()}

                    <Collapsible>
                        {this._renderBodySidenav()}
                    </ Collapsible>
                    
                    {this._renderCreateFolder()}

                    <CircleButton ButtonClassName='add-folder grey' icon='add' onClick={this.onClickCreateFolder} />
                </section>

            </SideNav>
        )
    }

    _renderTriggerButton() {
        return <Button
            floating large
            className={this.props.buttonTriggerStyle.buttonClassName}
            waves='light'>
            <Icon className='triggerIcon'> {this.props.buttonTriggerStyle.icon}</Icon>
        </Button>
    }

    _renderHeader() {
        return <header>
            <SideNavItem className='delete-sidenav'>
                <Icon className={this.props.buttonDropStyle.iconClassName}>{this.props.buttonDropStyle.icon}</Icon>
            </SideNavItem>
            <h4>{this.props.user.name[0]}{this.props.user.surname[0]}</h4>
            <h5>Welcome</h5>
        </header>

    }

    _renderCreateFolder() {
        return this.state.createFolder ?
            <Fade left>
                <AddItem
                    itemType='folder'
                    inputType='text'
                    onSubmit={this.handlerCreateFolder}
                    onCancel={this.onCancelCreateFolder} />
            </Fade>
            : false

    }

    _renderBodySidenav() {
        return this.props.folders.map(folder => <Folder
            onRenameFolder={this.props.onRenameFolder}
            onAddFile={this.props.onAddFile}
            title={folder.title}
            files={folder.files} />)
    }
}

export default Sidenav