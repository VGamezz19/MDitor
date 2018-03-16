import React from 'react';
import ReactMarkdown from 'react-markdown'
import initialText from './initialText'

import PropTypes from 'prop-types';

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
    const { showInitialMarkDown } = this.props
    const { content } = this.state

    return (
      <ReactMarkdown
        className='mardownViwer'
        source={showInitialMarkDown ? initialText : content} />
    )
  }
}

MarkDown.propTypes = { 
  file: PropTypes.object,
  showInitialMarkDown: PropTypes.bool,
 }

export default MarkDown