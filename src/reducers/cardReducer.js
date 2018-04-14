import { 
  FETCH_GIST_ALL,
  FETCH_GIST_SUCCESS,
  FETCH_GIST_ERROR,
  POST_NEW_GIST,
  POST_NEW_GIST_ERROR,
  POST_NEW_GIST_SUCCESS,
  DELETE_GIST_ERROR,
  DELETE_GIST_SUCCESS,
  DELETE_GIST,
  CLEAR_ERROR,
  EDIT_GIST_ERROR,
  EDIT_GIST_SUCCESS,
} from './../actions';

const initialState = {
  cards: {},
  error: {},
  gist: {},
  isLoading: false,
};

const CardReducer = (state = initialState, actions) => {
  switch(actions.type) {
    case FETCH_GIST_ALL:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_GIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cards: actions.payload.files,
        gist: actions.payload,
      };
    case POST_NEW_GIST:
      return {
        ...state,
        isLoading: true,
      }
    case POST_NEW_GIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case FETCH_GIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: actions.payload,
      }
    case POST_NEW_GIST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: actions.paylaod,
      };
    case DELETE_GIST: 
      return {
        ...state,
        isLoading: true,
      }
    case DELETE_GIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cards: actions.payload.files,
        gist: actions.payload, 
      }
    case DELETE_GIST_ERROR:
      return {
        ...state,
        error: actions.payload,
      }
    case EDIT_GIST_SUCCESS:
      return {
        ...state,
        cards: actions.payload.files,
        gist: actions.payload,
      }
    case EDIT_GIST_ERROR:
      return {
        ...state,
        error: actions.payload,
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