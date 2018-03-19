import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const counter = (state = {}, action) => {
  switch(action.type) {
    case 'TEST':
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter,
  form: formReducer,
});

export default rootReducer;