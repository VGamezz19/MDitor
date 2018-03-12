import React, { Component } from 'react';
import Draft, { Editor, EditorState,ContentState, convertFromHTML, RichUtils } from 'draft-js';

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueEditor: '# H1',
            editorState: EditorState.createWithContent(
                ContentState.createFromBlockArray(
                  convertFromHTML('<p>My initial content.</p>')
                )
              )
        };
        this.onChange = (editorState) => {
            
            // var rawData = Draft.convertToRaw(editorState.getCurrentContent())
            // var editorState = Draft.EditorState.createWithContent(Draft.convertFromRaw(rawData))
            let content = Draft.convertToRaw(editorState.getCurrentContent()).blocks.map(row=>!row.text? '\n' : row.text).join('\n')
            console.log(content)
            this.props.setMD(content)

            this.setState({ editorState });
        }
    }
    handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.onChange(newState);
          return 'handled';
        }
        return 'not-handled';
      }

    render() {
        
        return (
            <Editor  
                editorState={this.state.editorState} 
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange} />
        );
    }
}

export default MyEditor