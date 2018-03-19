import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import DevTools from './DevTools';

import App from './App';
import NewCard from './NewCard';
import List from './List';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <Route path='/' exact component={App} />
        <Route path='/newcard' component={NewCard} />
        <Route path='/list' component={List} />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root;