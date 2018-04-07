import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import DevTools from './DevTools';

import App from './App';
import NewCard from './NewCard';
import List from './List';
import Signin from './Signin';

import Nav from './../components/Nav';
import Alert from '../components/Alert';

import 'bootstrap/dist/css/bootstrap.css';
import '../style/app.css';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <Nav/>
          <Alert />
          <Route path='/' exact component={App} />
          <Route path='/new' component={NewCard} />
          <Route path='/list' component={List} />
          <Route path='/signin' component={Signin} />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;