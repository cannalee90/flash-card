import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {
  constructor(props) {
    super(props);
  }

  signin() {
  }

  render() {
    return(
      <div>
        <h1>This is signin page</h1>
        <Link to='https://github.com/login/oauth/authorize?client_id=b1497163e82bf1dfd9c1'>Signin</Link>
      </div>
    )
  }
}

export default Signin;