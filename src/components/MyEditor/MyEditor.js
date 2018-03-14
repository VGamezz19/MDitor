import React from 'react';
import Draft, { Editor, EditorState } from 'draft-js';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editorState: EditorState.createEmpty() };
    }
    onChange = (editorState) => {

        let rawObject = Draft.convertToRaw(editorState.getCurrentContent())

        let content = rawObject.blocks.map(raw => raw.text ? '\n'+raw.text : '\n\n').join(' ')

        this.setState({ editorState })

        //TODO CLICK!
         this.props.handlerMyEditor(content)
    };
    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }
}

export default MyEditor