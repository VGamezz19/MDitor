import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class MarkDown extends Component {
    
    render() {
       return <ReactMarkdown source={'# This is a header\n\nAnd this is a paragraph'}/>
    }
   
}
