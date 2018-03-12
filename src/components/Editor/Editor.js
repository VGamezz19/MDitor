import React, { Component } from 'react';
import { Divider } from 'material-ui';

class Editor extends Component {
    render() {
        return (
            <pre class='wtd editor-input'>
                <textarea>
                    Hello there, this is some text in a text area
                </textarea>
            </pre>
        );
    }
}

export default Editor