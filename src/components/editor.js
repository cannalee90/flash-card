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
  }

  setEditor = (ref) => {
    const { onChange, onFocus, currentValue, onBlur, onDrop } = this.props;
    this.editor = new TuiEditor({
      el: document.querySelector('#tui-editor'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '300px',
      initialValue: currentValue,
    });
    this.editor.on('change', () => {
      onChange(this.editor.getValue());
    });
    this.editor.on('focus', () => {
      onFocus();
    });
    this.editor.on('blur', () => {
      onBlur();
    })
    this.editor.on('drop', () => {
      onDrop();
    })
  }

  render() {
    const {
      wrapperClassName,
      label,
    } = this.props;
    return(
      <div className={wrapperClassName}>
        {label && <label>{label}</label>}
        <div id='tui-editor' ref={this.setEditor}/>
      </div>      
    );
  }
}

export default Editor;
