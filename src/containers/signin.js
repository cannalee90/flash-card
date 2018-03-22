import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Config from './../config';
import Popup from './../utils/popup';

// 일단 토큰을 생성해서 gist에 접근하는 방법을 사용
// 여러명이서 할땐 어짜피 리포를 사용해야함
// 다음 버젼에서는 리포를 사용해서 여러명이서 할 수 있도록 한다.

class Signin extends Component {
  constructor(props) {
    super(props);
    this.githubURL = `https://github.com/login/oauth/authorize?client_id=${Config.githubAuth.clientId}`;
    
  }

  signin = () => {
  }

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <h1>This is signin page enter token</h1>
        
      </div>
    )
  }
}

export default Signin;