import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ModalEdit extends Component {
  state = {
    open: false,
    inputValue: ''
  };

  componentWillReceiveProps(props) {
    const { open, itemTitle: inputValue, itemId } = props

    this.setState({ open, inputValue, itemId })
  }

  componentDidMount() {
    const { open, itemTitle: inputValue, itemId } = this.props

    this.setState({ open, inputValue, itemId })
  }

  handleClose = () => {
    this.setState({ open: false })
    this.props.closeModal()
  }

  handlerInput = (inputValue) => this.setState({ inputValue })

  actionerModal = () => {

    const { handlerEdit } = this.props
    const { itemId, inputValue } = this.state

    if (inputValue) {

      this.handleClose();
      return handlerEdit(itemId, inputValue)
    }

    return false
  }

  render() {
    const { open, inputValue } = this.state

    const actions = [
      <FlatButton label="Cancel"
        primary={true}
        onClick={this.handleClose} />,
      <FlatButton label="Submit"
        primary={true}
        disabled={false}
        onClick={this.actionerModal} />];

    return (
      <MuiThemeProvider>
        <Dialog
          title="Rename Element"
          actions={actions}
          modal={false}
          open={open}
          onRequestClose={this.handleClose}
          contentStyle={this.props.modalSize}>

          Write a new name for this element:
        {open ?
            <FormModal
              inputValue={inputValue}
              handlerInput={this.handlerInput}
              submitModal={this.actionerModal} />
            : false}

        </ Dialog>
      </MuiThemeProvider>
    );
  }
}

function FormModal(props) {
  //WARNING BUG FOCUSE
  const { submitModal, handlerInput, inputValue } = props
  return (
    <form onSubmit={event => { event.preventDefault(); submitModal() }}>
      <input
        autoFocus
        type='text'
        value={inputValue}
        onChange={(event) => handlerInput(event.target.value)} />
    </form>
  )
}

export default ModalEdit