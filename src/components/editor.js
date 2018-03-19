import React, { Component } from 'react';
import TuiEditor from 'tui-editor';

import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor.css'; // editor ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor content
import 'highlight.js/styles/github.css'; // code block highlight

class Editor extends Component {
  constructor(props) {
    super(props);
    this.editor = null;
    this.setEditor = this.setEditor.bind(this);
  }

  setEditor(ref) {
    console.log('setEditor');
    this.editor = new TuiEditor({
      el: document.querySelector('#tui-editor'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '300px'
    });
  }

  render() {
    return(
      <div>
        <div id='tui-editor' ref={(ref) => this.setEditor(ref)}/>
      </div>      
    );
  }
}

export default Editor;
