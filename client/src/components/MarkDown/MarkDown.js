import React from 'react';
import ReactMarkdown from 'react-markdown'
import initialText from './initialText'

import PropTypes from 'prop-types';
import File from 'mditor-types';

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

      const { file } = this.props;

      this.setState({ content : file.getContent(), fileId: file.getId() })
    }
  }

  componentWillReceiveProps(props) {

    const { showInitialMarkDown } = props

    if (!showInitialMarkDown) {

      const { file } = props;

      this.setState(({ fileId }) => {

        if (fileId !== file.getId()) {

          return { content: file.getContent(), fileId: file.getId()  }
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
  /**
   * mandatory type
   * File from ('mditor-types');
   */
  file: PropTypes.instanceOf(File),
  showInitialMarkDown: PropTypes.bool,
 }

export default MarkDown