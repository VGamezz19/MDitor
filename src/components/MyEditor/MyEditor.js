import React from 'react';
import Draft, { Editor, EditorState, ContentState } from 'draft-js';


class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor",props)
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    componentWillMount(){
        this.setState({
            editorState: EditorState.createWithContent(ContentState.createFromText(this.props.file.content))
        })
    }

    // componentWillReceiveProps(props) {
    //     const file = props.file
    //     console.log("ReciveProps",props)

    //     //WARN
   
    //     this.setState(prevState =>({
    //         editorState: EditorState.push(prevState.editorState, ContentState.createFromText(file.content)),
    //         fileId: file.id
    //     }))
    // }

    componentDidMount() {
        console.log("DidMount",this.props)
    }

    componentWillUpdate() {
        console.log("willUpdate",this.props)
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