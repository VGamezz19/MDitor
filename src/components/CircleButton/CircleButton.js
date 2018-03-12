import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize'

class CircleButton extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Button 
                floating large 
                className={this.props.ButtonClassName} 
                waves='light'>
                <Icon className={this.props.IconClassName + " main-icon"}> {this.props.icon}</Icon>
            </Button>
        )
    }
}

export default CircleButton