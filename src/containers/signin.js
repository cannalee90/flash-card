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

  // login flow
  // user is not logined opend popup
  // and get code from pop
  // referenced 
  // https://gist.github.com/gauravtiwari/2ae9f44aee281c759fe5a66d5c2721a2
  // https://www.npmjs.com/package/react-github-login
  // get code
  // request to aws api gateway learn learn lambda and get token
  // use this token to call api

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