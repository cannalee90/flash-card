import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import actionLifeCycle from '../middlewares/actionLifeCycle';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools'
import rootEpic from '../epic';

const epicMiddlewre = createEpicMiddleware(rootEpic);

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(epicMiddlewre, actionLifeCycle),
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
