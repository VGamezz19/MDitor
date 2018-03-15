import React from 'react';
import Draft, { Editor, EditorState, ContentState } from 'draft-js';


class MyEditor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editorState: EditorState.createEmpty(),
            fileId :''
        }
    }

    componentWillMount(){
        console.log(this.props)
        this.setState(prevState => {
            return {
                editorState: EditorState.push(prevState.editorState,ContentState.createFromText(this.props.file.content)),
                fileId :this.props.file.id 
            }
        })
    }

    componentWillReceiveProps(props){
        console.log(props)
        this.setState(prevState => {
            if( prevState.fileId !== props.file.id) {
                return {
                    editorState: EditorState.push(prevState.editorState,ContentState.createFromText(props.file.content)),
                    fileId :props.file.id 
                }
            }
        })
    }

    onChange = (editorState) => {
        let rawObject = Draft.convertToRaw(editorState.getCurrentContent())
        // WARN!!!!
        let content = rawObject.blocks.map(raw => raw.text ? '\n' + raw.text : '\n\n').join(' ')

        this.setState({ editorState })

        this.props.handlerMyEditor(content)
    };
    render() {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        );
    }
}

export default MyEditor