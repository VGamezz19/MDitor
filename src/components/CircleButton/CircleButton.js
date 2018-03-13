import React, { Component } from 'react';
import { Button, Icon } from 'react-materialize'

class CircleButton extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handlerOnClick = () => {
        console.log("circle clicked")
        this.props.onClick()
    }

    render() {
        return (
            <Button 
                floating large 
                className={this.props.ButtonClassName} 
                onClick={this.handlerOnClick}
                waves='light'>
                <Icon className={this.props.IconClassName + " main-icon"}> {this.props.icon}</Icon>
            </Button>
        )
    }
}

export default CircleButton