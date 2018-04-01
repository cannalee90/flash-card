import { 
  SAVE_ACCESS_TOKEN,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_ERROR,
  FETCH_ACCESS_TOKEN_ERROR } from './../actions';

const initialState = {
  currentUser: {},
  loading: false,
  accessToken: null,
  error: null,
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
    case FETCH_USER_INFO_ERROR:
      return {
        ...state,
        error: actions.payload.error,
      }
    case FETCH_ACCESS_TOKEN_ERROR:
      return {
        ...state,
        error: actions.payload.error,
      }
    default:
      return state;
  }
}

export default CardReducer;