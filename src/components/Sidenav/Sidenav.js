import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon, Collapsible, CollapsibleItem } from 'react-materialize'
import CircleButton from '../CircleButton'

class Sidenav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iconCollapsibleItem: ['chevron_right','folder']
        }
    }

    handlerFolder = () => {
        this.setState(prevState => {
            if(prevState.iconCollapsibleItem[1] === 'folder'){
                return {
                    iconCollapsibleItem: ['expand_more','folder_open']
                }
            }

            return {
                iconCollapsibleItem: ['chevron_right','folder']
            }
        })
    }

    render() {
        return (
            <SideNav
                className='side-nav grey lighten-2'
                trigger={
                    <Button
                        floating large
                        className={this.props.style.ButtonClassName}
                        waves='light'>
                        <Icon className={this.props.style.IconClassName}> {this.props.style.icon}</Icon>
                    </Button>
                }
                options={{ closeOnClick: true }}>

                <section className='content-sidenav'>
                    <header>
                        <SideNavItem className='delete-sidenav'>
                            <Icon className={this.props.style.IconClassName}>close</Icon>
                        </SideNavItem>
                        <h4>VG</h4>
                        <h5>Welcome</h5>
                    </header>
                    <Collapsible>
                        <CollapsibleItem header='new-folder' icon={this.state.iconCollapsibleItem} onClick={this.handlerFolder}>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Second' icon='folder'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Third' icon='folder'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                    </Collapsible>
                    <CircleButton ButtonClassName='grey' IconClassName='black-font' icon='add'/>
                    {/* <SideNavItem href='#!second'>Second Link</SideNavItem>
                    <SideNavItem divider />
                    <SideNavItem subheader>Subheader</SideNavItem>
                    <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem> */}
                </section>

            </SideNav>
        )
    }
}

export default Sidenav



