import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon } from 'react-materialize'
import CircleButton from '../CircleButton'

class Sidenav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            closeSidenav: true
        }
    }

    render() {
        return (
            <SideNav
                className='side-nav grey lighten-1'
                trigger={
                    <Button
                        floating large
                        className={this.props.style.ButtonClassName}
                        waves='light'>
                        <Icon className={this.props.style.IconClassName}> {this.props.style.icon}</Icon>
                    </Button>
                }
                options={{ closeOnClick: this.state.closeSidenav }}>

                <section class='content-sidenav'>
                    <header>
                        {/* <Button
                            floating large
                            className={this.props.style.ButtonClassName}
                            waves='light'
                            onClick={() => this.setState({closeSidenav:true})}>
                            <Icon className={this.props.style.IconClassName}> delete </Icon>
                        </Button> */}
                        <h4>VG</h4>
                        <h5>Welcome</h5>
                    </header>
                    <SideNavItem href='#!second'>Second Link</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>Subheader</SideNavItem>
                    <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
                </section>

            </SideNav>
        )
    }
}

export default Sidenav



