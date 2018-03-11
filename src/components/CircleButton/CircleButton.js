import React, { Component } from 'react';

class CircleButton extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <a class="btn-floating btn-large waves-effect waves-light red">
                <i class="material-icons">add</i>
            </a>
        )
    }
}

export default CircleButton