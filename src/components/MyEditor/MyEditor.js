import React from 'react';
import Draft, { Editor, EditorState, ContentState } from 'draft-js';


class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        const folderId = this.props.folderId
        const fileId = this.props.fileId
    
        const src = this.props.folders.find( folder => folder.id == folderId).files.find(file => file.id == fileId)

        this.state = { editorState: EditorState.createWithContent(ContentState.createFromText(src.content)) };
    }
    onChange = (editorState) => {

        let rawObject = Draft.convertToRaw(editorState.getCurrentContent())

        let content = rawObject.blocks.map(raw => raw.text ? '\n' + raw.text : '\n\n').join(' ')

        this.setState({ editorState })

        const folderId = this.props.folderId
        const fileId = this.props.fileId

        this.props.handlerMyEditor(folderId, fileId, content)
    };
    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }
}

export default MyEditor