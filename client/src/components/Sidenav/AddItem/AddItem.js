import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import Delete from 'material-ui/svg-icons/content/clear'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

    handlerCancel = () => {
        const { onCancel } = this.props

        if (onCancel) {
            onCancel()
        }
    }

    handlerSubmit = (value) => {
        const { onSubmit } = this.props

        if (onSubmit) {
            onSubmit(value)
        }
    }

    render() {
        const { itemType, className, inputType } = this.props
        const { value } = this.state

        return (
            <form
                className={`format ${itemType} ${className}`}
                onSubmit={(event) => {
                    event.preventDefault()
                    this.handlerSubmit(value)
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

                <MuiThemeProvider>
                    <IconButton className='button-delete' onClick={this.handlerCancel}>
                        <Delete />
                    </IconButton>
                </MuiThemeProvider>

            </form>
        )
    }
}
export default AddItem