import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();

console.log(Root);

render(
  <Root store={store} />,
  document.getElementById('root')
);