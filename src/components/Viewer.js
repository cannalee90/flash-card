import React, { Component } from 'react';
import marked from 'marked';

export default class Viewer extends Component {
  constructor(props) {
    super(props);
    this.viewer = null;
  }

  createMarkup = () => {
    const { content } = this.props;
    const __html = marked(content);
    return {__html: __html};
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}
