import React from 'react';
import Draft, { Editor } from 'draft-js';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: Draft.EditorState.createEmpty(),
            fileId: undefined
        }
    }

    componentWillMount() {

        const { file: { content, id: fileId } } = this.props;
        const draftContentState = Draft.ContentState.createFromText(content)

        this.setState(({ editorState }) => ({
            editorState: Draft.EditorState.push(editorState, draftContentState),
            fileId
        }))
    }

    componentWillReceiveProps(props) {

        const { file: { content, id: fileId } } = props;

        this.setState(prevState => {

            if (prevState.fileId !== fileId) {

                const draftContentState = Draft.ContentState.createFromText(content)

                return {
                    editorState: Draft.EditorState.push(prevState.editorState, draftContentState),
                    fileId
                }
            }
        })
    }

    onChange = (editorState) => {

        const content = editorState.getCurrentContent().getPlainText()

        this.setState({ editorState })

        this.props.emitCurrentContent(content)
    }

    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }
}

export default MyEditor