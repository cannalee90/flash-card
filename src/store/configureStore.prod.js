import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const configureStore = preloadedState => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(),
  )
}

export default configureStore;