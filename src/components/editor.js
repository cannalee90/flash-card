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
    if (this.editor == null) {
      const { onChange, onFocus, currentValue, onBlur, onDrop } = this.props;
      this.editor = new TuiEditor({
        el: document.querySelector('#tui-editor'),
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        height: '300px',
        initialValue: currentValue,
      });
      this.editor.on('change', () => {
        console.log('change');
        onChange(this.editor.getValue());
      });
      this.editor.on('focus', () => {
        console.log('focusing');
        onFocus();
      });
      this.editor.on('blur', () => {
        console.log('blurring');
        onBlur();
      })
      this.editor.on('drop', () => {
        console.log('dropping');
        onDrop();
      })
    }
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
