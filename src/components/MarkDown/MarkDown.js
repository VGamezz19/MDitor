import React from 'react';
import ReactMarkdown from 'react-markdown'
import initialText from './initialText'

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: initialText,
    }
  }

  componentDidMount() {
    if (!this.props.initial) {
      const file= this.props.file

      this.setState({ content: file.content })
    }
  }

  render() {
    return this.props.initial ? 
              <ReactMarkdown 
                className='mardownViwer' 
                source={initialText} /> 
                : 
              <ReactMarkdown 
                className='mardownViwer' 
                source={this.state.content} />
  }
}

export default MarkDown