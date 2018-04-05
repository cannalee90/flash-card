import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { postNewGist } from '../actions/index';

import FormTest from './form';

class NewCard extends Component {  
  onSubmit = (values) => {
    this.props.postNewGist(values);
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

const mapDispatchToProps = (dispatch) => {
  return {
    postNewGist: (values) => dispatch(postNewGist(values)),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(NewCard))