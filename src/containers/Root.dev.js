import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import DevTools from './DevTools';

import App from './App';
import NewCard from './NewCard';
import EditCard from './EditCard';
import List from './List';
import Signin from './Signin';
import Check from './Check';

import Nav from './../components/Nav';
import Alert from '../components/Alert';

import { encodeURI } from '../utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

const isAuthenticated = (store) => {
  const { user } = store.getState();
  if(user.signIn) {
    return true;
  }
  return false;
}

const hasToken = (store) => {
  const { user } = store.getState();
  if(user.accessToken) {
    return true;
  }
  return false;
}


const Root = ({ store }) => {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
      if(!hasToken(store)) {
        if(rest.path !== '/') {
          return <Redirect to={`/?nextPage=${encodeURI(rest.path)}`} />
        }
        return <Redirect to='/' />
      }
      else if(isAuthenticated(store)) {
        return <Component {...props} />
      } else {
        return <App />
      }
    }} />
  }

  return (
    <Provider store={store}>
      <div>
        <Nav/>
        <Alert />
        <Route path='/' exact component={Signin} />
        <PrivateRoute path='/new' component={NewCard} />
        <PrivateRoute path='/list' component={List} />
        <PrivateRoute path='/edit/:cardname' component={EditCard} />
        <PrivateRoute path='/check' component={Check} />
        <Route path='/callback' component={App} />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;