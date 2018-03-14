import React from 'react';
import Draft, { Editor, EditorState } from 'draft-js';
import { markdownToDraft } from 'markdown-draft-js';
const ReactMarkdown = require('react-markdown')
class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(Draft.convertFromRaw(markdownToDraft("# hola que tal"))),
      src: `
# Welcome MDitor.
This is Just a BETA!

# Support 
---

## H1 - H6

# h1
## h2
### h3
#### h4
##### h5
###### h6
paragraf

## <HR> Line
---

## **Bold**

## *ITALIC*

## \`Block\`

## No Code support...

\`\`\`javascript
no code support...
console.log("nope")
\`\`\`\

## [Ancors](www.google.com)

## IMG

![Imgur](https://i.imgur.com/v0DzY7P.png)

## Table

|test table | test table 2|
|----|----|
content table| content table 2 |


` };

  };

  componentWillReceiveProps(props) {
    console.log(props)

    let rawData = markdownToDraft("# hola que tal");

    console.log(rawData)
    // const content  = Draft.convertFromRaw(JSON.parse(markdownToDraft("# hola que tal");));
    // this.setState = { editorState: EditorState.createWithContent(Draft.convertFromRaw(JSON.parse(markdownToDraft("# hola que tal"))};

    // console.log(rawData)

    this.setState({
      editorState: EditorState.push(this.state.editorState, Draft.convertFromRaw(markdownToDraft(props.src))),
      src: props.src
    })
  }

  render() {
    return (
      // <Editor readOnly={true} editorState={this.state.editorState} />

      <ReactMarkdown className='mardownViwer' source={this.state.src} />
    );
  }

}



export default MarkDown