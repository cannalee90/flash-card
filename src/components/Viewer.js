import React, { Component } from 'react';
import marked from 'marked';

export default class Viewer extends Component {
  constructor(props) {
    super(props);
    this.viewer = null;
  }

  createMarkup = () => {
    const __html = marked('# Hello World');
    return {__html: __html};
  }

  render() {
    const { content } = this.props;
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}
