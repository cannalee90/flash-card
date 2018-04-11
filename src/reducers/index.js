import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import card from './cardReducer';
import user from './userReducer';
import { USER_SIGNOUT } from '../actions';

const appReducer = combineReducers({
  card,
  user,
  form: formReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_SIGNOUT) {
    localStorage.removeItem('githubAuthToken');
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;