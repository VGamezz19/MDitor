import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon, Collapsible, CollapsibleItem, Tabs, Tab } from 'react-materialize'
import CircleButton from '../CircleButton'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Sidenav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            iconCollapsibleItem: ['chevron_right', 'folder']
        }
    }

    handlerFolder = () => {
        this.setState(prevState => {
            if (prevState.iconCollapsibleItem[1] === 'folder') {
                return {
                    iconCollapsibleItem: ['expand_more', 'folder_open']
                }
            }

            return {
                iconCollapsibleItem: ['chevron_right', 'folder']
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

                        <li class="">
                            <div class="collapsible-header" onClick={this.handlerFolder}>
                                <i class="material-icons">
                                    {this.state.iconCollapsibleItem[0]}
                                    {this.state.iconCollapsibleItem[1]}
                                </i>
                                new-folder
                            </div>
                            
                            <IconMenu
                                    key='test'
                                    id='test'
                                    className='icon-menu-folder'
                                    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                    anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}>
                                    <MenuItem primaryText="Refresh" />
                                    <MenuItem primaryText="Send feedback" />
                                    <MenuItem primaryText="Settings" />
                                    <MenuItem primaryText="Help" />
                                    <MenuItem primaryText="Sign out" />
                                </IconMenu>

                            <div class="collapsible-body grey lighten-2">
                                <div className="content-files">
                                    <Button className= ' files grey lighten-3' waves='light'>name-file<Icon right>delete</Icon></Button>
                                    <Button className= 'files grey lighten-3' waves='light'>name-file<Icon right>delete</Icon></Button>
                                    <Button className= ' files grey lighten-3' waves='light'>name-file<Icon right>delete</Icon></Button>

                                    <CircleButton ButtonClassName='buton-files grey lighten-3' IconClassName='black-font' icon='add' />

                                </div>


                            </div>
                        </li>
                        <CollapsibleItem header={`new-folder`} icon={this.state.iconCollapsibleItem} onClick={this.handlerFolder}>
                            LoremIpsum

                        </CollapsibleItem>
                        <CollapsibleItem header='Second' icon='folder'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                        <CollapsibleItem header='Third' icon='folder'>
                            Lorem ipsum dolor sit amet.
                        </CollapsibleItem>
                    </Collapsible>
                    <CircleButton ButtonClassName='grey' IconClassName='black-font' icon='add' />
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



