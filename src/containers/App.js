import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return(
      <div>
        <h1>This is App</h1>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(App))
