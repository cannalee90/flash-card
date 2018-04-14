import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { clearError } from '../actions';
import { isEmptyObj } from '../utils';

class AlertComponent extends Component {

  componentWillReceiveProps(newProps) {
    const { errors } = newProps;
    if(this.props.location.pathname !== newProps.location.pathname && errors.length !== 0) {
      this.props.clearError();
    }
  }

  render() {
    const errors = this.props.errors;
    if(!errors.length) {
      return null;
    }
    return (
      <div className='container'>      
        <Alert color='danger'>
          <ul style={{marginBottom: '0px'}}>
            {errors.map((error) => {
              const message = `${error.status} ${error.response.message || error.message}`;
              return <li>{message}</li>
            })}
          </ul>
        </Alert>
      </div>
    )
  }
  
}

const mapStateToProps = (state, props) => {
  const errors = [];
  Object.keys(state)
    .forEach((key) => {
      const reducerError = state[key].error;
      if(reducerError !== undefined && reducerError !== null && !isEmptyObj(reducerError)) {
        errors.push(reducerError);
      }
    });
  return {
    errors
  }
}

function mapDispatchToProps(dispatch) {
  return {
    clearError: () => dispatch(clearError()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AlertComponent));