import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(),
  );
  
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer)
    });
  }
  return store;
}

export default configureStore;
