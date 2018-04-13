import { 
  SAVE_ACCESS_TOKEN,
  FETCH_USER_INFO,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_ERROR,
  FETCH_ACCESS_TOKEN_ERROR,
  CLEAR_ERROR,
} from './../actions';

const initialState = {
  currentUser: {},
  isLoading: false,
  signIn: false,
  accessToken: localStorage.getItem('githubAuthToken') ? localStorage.getItem('githubAuthToken') : null,
  error: {},
};

const CardReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case FETCH_USER_INFO:
      return {
        ...state,
        isLoading: true,
      }
    case SAVE_ACCESS_TOKEN:
      return {
        ...state,
        isLoading: false,
        accessToken: actions.payload.token,
      }
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        signIn: true,
        currentUser: actions.payload,
      }
    case FETCH_USER_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: actions.payload.error,
      }
    case FETCH_ACCESS_TOKEN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: actions.payload.error,
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: {},
      }
    default:
      return state;
  }
}

export default CardReducer;