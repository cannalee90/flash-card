import { SAVE_ACCESS_TOKEN, FETCH_USER_INFO_SUCCESS } from './../actions';

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
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        currentUser: actions.payload
      }
    default:
      return state;
  }
}

export default CardReducer;