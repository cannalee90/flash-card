import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';

const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>
  ,
  document.getElementById('root')
);