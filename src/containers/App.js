import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchUserInfo } from '../actions';
import { isEmptyObj } from '../utils';

class App extends Component {
  
  componentWillReceiveProps(newProps) {
    if(this.props.user.error !== newProps.user.error || !isEmptyObj(newProps.user.error)) {
      this.props.history.push({
        pathname: '/',
        state: { errorClear: false },
      })
    }

    if(newProps.user.signIn) {
      this.props.history.push('/list');
    }
  }

  componentDidMount() {
    this.props.fetchUserInfo();
  }

  render() {
    return(
      <div>
        <div className='container'>
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => dispatch(fetchUserInfo()),
  }
}

function mapStateToProps({user}) {
  return {
    user,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
