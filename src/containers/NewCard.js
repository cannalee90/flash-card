import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'

import FormTest from './form';

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    console.log(values);
  }

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
        <FormTest
          onSubmit={this.onSubmit}
        />        
      </div>
    );
  }
}

export default withRouter(connect(null, null)(NewCard))