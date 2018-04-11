import React, { Component } from 'react';
import QueryString from 'query-string';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from '../utils/firebase';

import Loader from '../components/Loader';
import Config from './../config';
import {
  saveAccessToken,
  fetchAccessTokenError,
  fetchUserInfo,
} from '../actions';
import {
  isEmptyObj,
  parseURIQuery,
} from '../utils';

class Signin extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { signIn } = this.props.user;
    if(!signIn && firebase.auth().currentUser) {
      firebase.auth().signOut();
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.user.error !== newProps.user.error || !isEmptyObj(newProps.user.error)) {
      this.props.history.push({
        pathname: '/',
        state: { errorClear: false },
      })
    }
    if(newProps.user.signIn) {
      const query = parseURIQuery(this.props.location.search);
      if(isEmptyObj(query)) {
        this.props.history.push('/list');
      } else {
        this.props.history.push(query.nextPage);
      }
    }
  }

  componenetDidMount() {
    const { accessToken } = this.props.user;
    if (accessToken) {
      console.log('aaaa');
      this.props.fetchUserInfo();
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
    const { isLoading } = this.props.user;
    if(isLoading) {
      return (
        <div className='container strech-container-height flex-middle'>
          <Loader
            isLoading={isLoading}
          />
        </div>
      );
    }
    return (
      <div className='container strech-container-height flex-middle'>
        <button className='btn btn-primary' onClick={this.requestGithub}>
          Signin with Github
        </button>
      </div>
    );
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