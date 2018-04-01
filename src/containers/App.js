import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchUserInfo } from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUserInfo();
  }

  render() {
    return(
      <div>
        <h1>This is App</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => dispatch(fetchUserInfo()),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
