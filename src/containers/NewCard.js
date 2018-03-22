import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import FormTest from './form';

class NewCard extends Component {
  
  onSubmit = (values) => {
  }

  render() {
    return(
      <div>
        <h1>This is new Card</h1>
        <FormTest
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default withRouter(connect(null, null)(NewCard))