import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Config from './../config';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.githubURL = `https://github.com/login/oauth/authorize?client_id=${Config.githubAuth.clientId}`;
  }

  signin() {
  }

  render() {
    return(
      <div>
        <h1>This is signin page</h1>
        <a href={this.githubURL}>Signin</a>
      </div>
    )
  }
}

export default Signin;