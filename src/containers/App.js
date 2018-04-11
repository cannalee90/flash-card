import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Loader from '../components/Loader';
import { fetchUserInfo } from '../actions';
import { isEmptyObj, encodeURI, parseURIQuery } from '../utils';

class App extends Component {
  
  componentWillReceiveProps(newProps) {
    //만약 토큰이 없는데 리프레쉬 할 경우 or private router에 접근하는 경우
    if(this.props.user.error !== newProps.user.error || !isEmptyObj(newProps.user.error)) {
      const encodedURI = encodeURI(this.props.location.pathname);
      this.props.history.push({
        pathname: '/',
        query: {
          nextPage: encodedURI,
        },
        state: { errorClear: false },
      })
    }

    if(newProps.user.signIn) {
      const query = parseURIQuery(this.props.location.search);
      this.props.history.push('/list');
    }
  }

  componentDidMount() {
    this.props.fetchUserInfo();
  }

  render() {
    const { isLoading } = this.props;
    return(
      <div>
        <div className='container strech-container-height flex-middle'>
          <Loader
            isLoading={isLoading}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: () => dispatch(fetchUserInfo()),
  }
}

function mapStateToProps({user}) {
  return {
    user,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
