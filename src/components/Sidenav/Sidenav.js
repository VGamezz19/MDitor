import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon, Collapsible } from 'react-materialize'
import CircleButton from '../CircleButton'
import Folder from './Folder'
import { Fade } from 'react-reveal'
import AddItem from './AddItem'


//import { Button, Icon } from 'react-materialize'

class Sidenav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            createFolder: false
        }
    }

    onClickCreateFolder = () => this.state.createFolder ? true : this.setState({ createFolder: true })

    handlerCreateForlder = (title) => {

        this.setState({ createFolder: false })

        this.props.setNewFolder(title)
    }

    render() {
        return (
            <SideNav
                className='side-nav grey lighten-2'
                trigger={
                    <Button
                        floating large
                        className={this.props.buttonTriggerStyle.buttonClassName}
                        waves='light'>
                        <Icon className='triggerIcon'> {this.props.buttonTriggerStyle.icon}</Icon>
                    </Button>
                }
                options={{
                    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                    onClose: function (el) { return console.log("Closing") }
                }}>

                <section className='content-sidenav'>
                    <header>
                        <SideNavItem className='delete-sidenav'>
                            <Icon className={this.props.buttonDropStyle.iconClassName}>{this.props.buttonDropStyle.icon}</Icon>
                        </SideNavItem>
                        <h4>{this.props.user.name[0]}{this.props.user.surname[0]}</h4>
                        <h5>Welcome</h5>
                    </header>

                    <Collapsible>
                        {this.props.folders.map(folder => <Folder 
                                                            onRenameFolder={this.props.onRenameFolder} 
                                                            title={folder.title} 
                                                            files={folder.files} />)}
                    </Collapsible>

                    {this.state.createFolder ?
                        <Fade left>
                            <AddItem
                                itemType='folder'
                                inputType='text'
                                onSubmit={this.handlerCreateForlder} />
                        </Fade>
                        : false}

                    <CircleButton ButtonClassName='add-folder grey' icon='add' onClick={this.onClickCreateFolder} />
                </section>

            </SideNav>
        )
    }
}

export default Sidenav



