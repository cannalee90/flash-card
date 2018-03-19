import React, { Component } from 'react';
import Editor from './../components/editor';

class EditorWrapper extends Component {
  render() {
    const { onChange, onBlur, onFocus, onDrop, value} = this.props.input;
    return(
      <Editor
        currentValue={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onDrop={onDrop}
      />
    )
  }
}

export default EditorWrapper;