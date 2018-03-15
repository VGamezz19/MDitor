import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import Delete from 'material-ui/svg-icons/content/clear'

class AddItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        document.addEventListener('keydown', this._handleEscKey, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this._handleEscKey, false);
    }

    _handleEscKey = event => event.keyCode === 27 ? this.handlerCancel() : false;

    handlerChangeInput = value => this.setState({ value })

    // handlerSubmit = () => this.props.onSubmit(this.state.value)

    handlerCancel = () => this.props.onCancel()

    render() {
        const { itemType, className, inputType, onSubmit } = this.props
        const { value } = this.state

        return (
            <form
                className={`format ${itemType} ${className}`}
                onSubmit={(event) => {
                    event.preventDefault()
                    onSubmit(value)
                }}>
                <input
                    className='inputItem'
                    autoFocus
                    type={inputType}
                    value={value}
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