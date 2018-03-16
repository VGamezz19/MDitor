import React from 'react';
import ReactMarkdown from 'react-markdown'
import initialText from './initialText'

class MarkDown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      content: initialText,
      fileId: undefined
    }
  }
  componentWillMount() {
    
    const { showInitialMarkDown } = this.props

    if (!showInitialMarkDown) {

      const { file: { content, id: fileId }} = this.props;

      this.setState({ content, fileId })
    }
  }

  componentWillReceiveProps(props) {

    const { showInitialMarkDown } = props

    if (!showInitialMarkDown) {

      const { file: { content, id }} = props;

      this.setState(({ fileId }) => {

        if (fileId !== id) {

          return { content, fileId: id }
        }
      })
    }
  }

  render() {
    var Prism = require('prismjs');
    const { showInitialMarkDown } = this.props
    const { content } = this.state
    
    return (
      <ReactMarkdown
        className='mardownViwer'
        source={showInitialMarkDown ? initialText : content} />
    )
  }
}

export default MarkDown