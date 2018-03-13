import React, { Component } from 'react'

class AddItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: ''
        }
    }

    handlerChangeInput = inputValue => this.setState({ inputValue })

    handlerSubmit = () => this.props.onSubmit(this.state.inputValue)

    render() {
        return (
            <form
                class={`grey format ${this.props.itemType}`}
                onSubmit={(event) => {
                    event.preventDefault()
                    this.handlerSubmit()
                }}>
                <input
                    autoFocus
                    type={this.props.inputType}
                    value={this.state.value}
                    onChange={(event) => {
                        event.preventDefault();
                        this.handlerChangeInput(event.target.value)
                    }} />
            </form>
        )
    }
}
export default AddItem