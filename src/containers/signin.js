import React, { Component } from 'react';
import QueryString from 'query-string';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Config from './../config';
import { requestAccessToken } from '../actions';

class Signin extends Component {
  constructor(props) {
    super(props);
    const clientId = Config.githubAuth.clientId;
    this.githubURL = `https://github.com/login/oauth/authorize?client_id=${clientId}`
    this.state = {
      hasCodeParams: false,
    }
  }

  requestGithub = () => {
    window.location.href = this.githubURL;
  }

  componentDidMount() {
    const { search } = this.props.location;
    const query = QueryString.parse(search);
    if(query['code']) {
      this.setState({
        hasCodeParams: true,
      });
      this.props.requestAccessToken(query['code']);
    } else {
      this.setState({
        hasCodeParams: false,
      })
    }
  }

  render() {
    const { hasCodeParams } = this.state;
    return(
      <div>
        {!hasCodeParams && <button onClick={this.requestGithub}>Login</button>}       
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestAccessToken: (code) => dispatch(requestAccessToken(code)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);