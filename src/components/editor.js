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

  setEditor = () => {
    const { onChange, onFocus, currentValue, onBlur, onDrop } = this.props;
    if(this.editor === null) {
      this.editor = new TuiEditor({
        el: document.querySelector('#tui-editor'),
        initialEditType: 'markdown',
        previewStyle: 'tab',
        height: '300px',
        initialValue: currentValue,
        events: {
          change: (e) => {
            onChange(this.editor.getValue());
          },
          focus: () => onFocus(),
          blur: () => onBlur(),
          drop: () => onDrop(),
        },
      });
    }
  }

  componentDidMount() {
    this.setEditor();
  }

  componentWillUnmount() {
    this.editor.setValue('');
    this.editor.off('change');
    this.editor.off('focus');
    this.editor.off('blur');
    this.editor.off('drop');
    this.editor = null;
  }

  render() {
    const {
      wrapperClassName,
      label,
    } = this.props;
    return(
      <div className={wrapperClassName}>
        {label && <label>{label}</label>}
        <div id='tui-editor' />
      </div>      
    );
  }
}

export default Editor;
