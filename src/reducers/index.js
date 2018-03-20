import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import card from './cardReducer';

const rootReducer = combineReducers({
  card,
  form: formReducer,
});

export default rootReducer;