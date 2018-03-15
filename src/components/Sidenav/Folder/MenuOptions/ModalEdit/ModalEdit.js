import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const customContentStyle = {
  width: '30%',
  maxWidth: 'none',
};

class ModalEdit extends Component {
  state = {
    open: false,
    inputValue: ''
  };

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
      inputValue: props.itemTitle,
      itemId : props.itemId
    })
  }

  handleClose = () => {
    this.props.closeModal();
  };

  handlerInput = (inputValue) => this.setState({ inputValue })

  setNewRename = () => {
    this.handleClose()
    
    if (this.state.inputValue) {
      return this.props.handlerEdit(this.state.itemId, this.state.inputValue)
    }
    return false
  }

  render() {
    const actions = [
      <FlatButton label="Cancel"
        primary={true}
        onClick={this.handleClose} />,
      <FlatButton label="Submit"
        primary={true}
        disabled={false}
        onClick={this.setNewRename} />];

    return (

      <Dialog
        className='testClass'
        title="Rename Folder"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}
        contentStyle={customContentStyle}>

        Write a new name for this element:
        {this.state.open ?
          <FormModal
            inputValue={this.state.inputValue}
            handlerInput={this.handlerInput}
            setNewRename={this.setNewRename} />
          : false}

      </ Dialog>
    );
  }
}

class FormModal extends Component {

  componentDidMount() {
    console.log("ModalEditrModal")
    this.nameInput.focus();
  }

  render() {
    return (
      <form onSubmit={event => {
        event.preventDefault()
        this.props.setNewRename()
      }}>
        <input
          ref={input => { this.nameInput = input; }}
          autoFocus
          type='text'
          value={this.props.inputValue}
          onChange={(event) => this.props.handlerInput(event.target.value)} />
      </form>
    )
  }
}

export default ModalEdit