import React, { Component } from 'react';
import QueryString from 'query-string';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../utils/firebase';

import Config from './../config';
import {
  saveAccessToken,
  fetchAccessTokenError,
  fetchUserInfo,
} from '../actions';
import {
  isEmptyObj
} from '../utils';

class Signin extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.user.error !== newProps.user.error || !isEmptyObj(newProps.user.error)) {
      this.props.history.push({
        pathname: '/',
        state: { errorClear: false },
      })
    }

    if(newProps.user.signIn) {
      this.props.history.push('/list');
    }
  }

  requestGithub = () => {
    const provider = new firebase.auth.GithubAuthProvider();    
    provider.addScope('gist');
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const { accessToken } = result.credential;
      this.props.saveAccessToken(accessToken);
      localStorage.setItem('githubAuthToken', accessToken);
      this.props.fetchUserInfo();
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.requestGithub}>Login</button>
      </div>
    )
  }
}

const mapStateToProps = ({user}, props) => {
  return {
    user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveAccessToken: (code) => dispatch(saveAccessToken(code)),
    fetchAccessTokenError: (error) => dispatch(fetchAccessTokenError(error)),
    fetchUserInfo: () => dispatch(fetchUserInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);