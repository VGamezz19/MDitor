import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon, Collapsible } from 'react-materialize'
import CircleButton from '../CircleButton'
import Folder from './Folder'

class Sidenav extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
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
                options={{ closeOnClick: true }}>

                <section className='content-sidenav'>
                    <header>
                        <SideNavItem className='delete-sidenav'>
                            <Icon className={this.props.buttonDropStyle.iconClassName}>{this.props.buttonDropStyle.icon}</Icon>
                        </SideNavItem>
                        <h4>{this.props.user.name[0]}{this.props.user.surname[0]}</h4>
                        <h5>Welcome</h5>
                    </header>

                    <Collapsible>
                        {this.props.folders.map(folder => <Folder title={folder.title} files={folder.files} />)} 
                    </Collapsible>

                    <CircleButton ButtonClassName='add-folder grey' icon='add' />
                </section>

            </SideNav>
        )
    }
}

export default Sidenav



