import React, { Component } from 'react';
import QueryString from 'query-string';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../utils/firebase';

import Config from './../config';
import { saveAccessToken, fetchAccessTokenError } from '../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    const clientId = Config.githubAuth.clientId;
    
    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        const token = result.credential.accessToken;
        this.props.saveAccessToken(token);
        localStorage.setItem('githubAuthToken', token);
        this.props.history.push('/callback');
      }
      const user = result.user;
    }).catch((error) => {
      this.props.fetchAccessTokenError(error);
    });
  }

  

  requestGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();    
    provider.addScope('gist');
    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    return(
      <div>
        <button onClick={this.requestGithub}>Login</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveAccessToken: (code) => dispatch(saveAccessToken(code)),
    fetchAccessTokenError: (error) => dispatch(fetchAccessTokenError(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);