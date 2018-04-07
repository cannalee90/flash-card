import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';

 class AlertComponent extends Component {
  constructor(props){
    super(props);
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
              const message = `${error.response.code} ${error.response.message || error.message}`;
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
  Object.keys(state).forEach((key) => {
    const reducerError = state[key].error;
    if(reducerError !== undefined && reducerError !== null && Object.keys(reducerError).length !== 0) {
      errors.push(reducerError);
    }
  })
  return {
    errors
  }
}

export default connect(mapStateToProps, null)(AlertComponent);