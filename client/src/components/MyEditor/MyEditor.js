import React from 'react';
import Draft, { Editor } from 'draft-js';
import PropTypes from 'prop-types';
import File from 'mditor-types';

class MyEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: Draft.EditorState.createEmpty(),
            fileId: undefined
        }
    }

    componentWillMount() {

        const { file } = this.props;
        const draftContentState = Draft.ContentState.createFromText(file.getContent())

        this.setState(({ editorState }) => ({
            editorState: Draft.EditorState.push(editorState, draftContentState),
            fileId: file.getId()
        }))
    }

    componentWillReceiveProps(props) {

        const { file } = props;

        this.setState(prevState => {

            if (prevState.fileId !== file.getId()) {

                const draftContentState = Draft.ContentState.createFromText(file.getContent())

                return {
                    editorState: Draft.EditorState.push(prevState.editorState, draftContentState),
                    fileId: file.getId()
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

MyEditor.propTypes = { 
    /**
     * mandatory type
     * File from ('mditor-types');
     */
    file: PropTypes.instanceOf(File),
    /**
     * Need handler to take content Editor
     */
    emitCurrentContent: PropTypes.func.isRequired,
   }

export default MyEditor