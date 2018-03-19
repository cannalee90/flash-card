import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

class NewCard extends Component {
  render() {
    return(
      <div>
        <h1>This is new Card</h1>
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
      </div>
    );
  }
}

export default withRouter(connect(null, null)(NewCard))