import React from 'react';
import ReactMarkdown from 'react-markdown'
import initialText from './initialText'

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: initialText
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ src: props.src })
  }

  render() {
    return (
      <ReactMarkdown className='mardownViwer' source={this.state.src} />
    );
  }

}

export default MarkDown