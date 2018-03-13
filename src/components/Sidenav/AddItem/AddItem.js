import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/content/clear';
class AddItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    handlerChangeInput = inputValue => this.setState({ inputValue })

    handlerSubmit = () => this.props.onSubmit(this.state.inputValue)

    handlerCancel = () => this.props.onCancel()

    render() {
        return (
            <form
                className={`format ${this.props.itemType} ${this.props.className}`}
                onSubmit={(event) => {
                    event.preventDefault()
                    this.handlerSubmit()
                }}>
                <input
                    className='inputItem'
                    autoFocus
                    type={this.props.inputType}
                    value={this.state.value}
                    onChange={(event) => {
                        event.preventDefault();
                        this.handlerChangeInput(event.target.value)
                    }} />

                <IconButton className='button-delete' onClick={this.handlerCancel}>
                    <Delete />
                </IconButton>
            </form>
        )
    }
}
export default AddItem