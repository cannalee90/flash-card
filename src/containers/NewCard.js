import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { postNewGist } from '../actions/index';

import Form from './form';

class NewCard extends Component {  
  onSubmit = (values) => {
    return this.props.postNewGist(values)
    .then(() => {
      this.props.history.push('/list');
    });
  }

  render() {
    return(
      <div className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <Form
                onSubmit={this.onSubmit}
                form={'newCardForm'}
                initialValues={{
                  front: '',
                  back: '',
                }}
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