import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleRight);
library.add(faAngleLeft);

const store = configureStore();

render(
  <Router>
    <Root store={store} />
  </Router>
  ,
  document.getElementById('root')
);