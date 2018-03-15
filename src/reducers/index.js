import { combineReducers } from 'redux';

const counter = (state = {}, action) => {
  switch(action.type) {
    case 'TEST':
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;