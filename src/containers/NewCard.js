import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import FormTest from './form';

class NewCard extends Component {
  
  onSubmit = (values) => {
  }

  render() {
    return(
      <div className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 offset-md-2 col-lg-8 offset-lg-2'>
              <FormTest
                onSubmit={this.onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(NewCard))