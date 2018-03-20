import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

class List extends Component {
  componenetDidMount() {

  }
  
  render() {
    return(
      <div>
        <h1>This is List</h1>
        <ul>
          <li>
            <Link to='/'>App</Link>
          </li>
          <li>
            <Link to='/newcard'>NewCard</Link>
          </li>
          <li>
            <Link to='/list'>List</Link>
          </li>
        </ul>
        <div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(List))