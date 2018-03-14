import React from 'react';
import ReactMarkdown from 'react-markdown'
import initialText from './initialText'

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: initialText,
      folderId: '',
      fileId: '',
      contentFile: ''
    }
  }

  componentDidMount() {
    if (!this.props.initial) {
      const folderId = this.props.folderId
      const fileId = this.props.fileId

      const src = this.props.folders.find(folder => folder.id == folderId).files.find(file => file.id == fileId)
      console.log(src, this.props.folders)
      this.setState({ src: src.content })
    }
  }

  // componentWillReceiveProps(props) {
  //   this.setState({ src: props.src })
  // }

  render() {
    return this.props.initial ? <ReactMarkdown className='mardownViwer' source={initialText} /> : <ReactMarkdown className='mardownViwer' source={this.state.src} />
  }

}

export default MarkDown