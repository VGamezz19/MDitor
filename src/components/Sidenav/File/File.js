import React, { Component } from 'react'
import { Button, Icon } from 'react-materialize'

class File extends Component {
    render() {
        return (
            <Button className=' files grey lighten-3' waves='light'>{this.props.title}<Icon right>delete</Icon></Button>
        )
    }
}

export default File