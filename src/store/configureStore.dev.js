import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools'
import rootEpic from '../epic';

const epicMiddlewre = createEpicMiddleware(rootEpic);

const getTokenFromLocalStorate = (preloadedState = {}) => {
  const accessToken = localStorage.getItem('githubAuthToken');
  const ret = Object.assign(preloadedState, {
    user: {
      accessToken: accessToken,
    }
  });
  return ret;
}

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    getTokenFromLocalStorate(preloadedState),
    compose(
      applyMiddleware(epicMiddlewre),
      DevTools.instrument(),
    ),
  );
  
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    });
  }
  return store;
}

export default configureStore;
