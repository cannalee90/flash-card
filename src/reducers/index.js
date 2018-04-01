import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import card from './cardReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  card,
  user,
  form: formReducer,
});

export default rootReducer;