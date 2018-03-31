import { SAVE_ACCESS_TOKEN } from './../actions';

const initialState = {
  currentUser: {},
  loading: false,
  accessToken: null,
};

const CardReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case SAVE_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: actions.payload.token,
      }
    default:
      return state;
  }
}

export default CardReducer;