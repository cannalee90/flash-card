import React, { Component } from 'react';
import { httpGet } from './../utils';
import { Link } from 'react-router-dom';

class Signin extends Component {
  constructor(props) {
    super(props);
  }

  signin() {
  }

  render() {
    return(
      <Link to='https://github.com/login/oauth/authorize?client_id=b1497163e82bf1dfd9c1'>Signin</Link>
    )
  }
}

export default Signin;